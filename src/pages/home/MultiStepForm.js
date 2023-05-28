import { useState, useEffect } from "react";
import axios from 'axios';
import "./multiStepForm.css";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import jwt from 'jwt-decode';
import Cookies from 'js-cookie';

export default function MultiStepForm() {
  const [currentPage, setCurrentPage] = useState(1);
  const [symptoms, setSymptoms] = useState([]);
  const [checkedSymptoms, setCheckedSymptoms] = useState([]);
  const [filteredSymptoms, setFilteredSymptoms] = useState([]);
  const [diagnosis, setDiagnosis] = useState("");
  const [description, setDescription] = useState("");
  const [precautions, setPrecautions] = useState("");
  const [healthRating, setHealthRating] = useState(1);
  const [age, setAge] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");



  useEffect(() => {
    axios.request({
      method: 'get',
      url: 'https://meowria-be.fly.dev/symptoms'
    })
    .then((response) => {
      setSymptoms(response.data.symptoms);
      setFilteredSymptoms(response.data.symptoms);
    })
    .catch((error) => console.log(error));
  }, [])

  useEffect(() => {
    const filtered = symptoms.filter(symptom =>
      symptom.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSymptoms(filtered);
  }, [searchTerm, symptoms]);


  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(checkedSymptoms);

    if (currentPage === 3) {
      const symptomsJson = { symptoms: checkedSymptoms };
      axios.post('https://meowria-be.fly.dev/predict', symptomsJson)
        .then(function (response) {
          console.log(response);
          setDiagnosis(response.data.disease);
          setDescription(response.data.description);
          setPrecautions(response.data.precautions);
          nextPage();
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      nextPage();
    }
    const symptomsString = checkedSymptoms.join(', ');

    if (currentPage === 5) {
      const sessionToken = Cookies.get('sessionToken');
      const decodedToken = jwt(sessionToken);
      const userId = decodedToken.user_id;
      
      
    
      const recordData = {
        date: new Date().toISOString().slice(0, 10),
        symptoms: symptomsString,
        disease: diagnosis,
        user_id: userId,
        age: parseInt(age),
        rating: healthRating
      };
  
      axios.post('https://meowriabackend.fly.dev/record', recordData)
        .then(function (response) {
          console.log(response);
          nextPage();
        })
        .catch(function (error) {
          console.log(error);
          console.log(recordData)
        });
    } else {
      nextPage();
    }
  };

  const handleCheckboxChange = (event) => {
    const symptom = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setCheckedSymptoms([...checkedSymptoms, symptom]);
    } else {
      setCheckedSymptoms(checkedSymptoms.filter((s) => s !== symptom));
    }
  };

  const renderSymptoms = filteredSymptoms.map((symptom) => (
    <label key={symptom} className="checkbox">
      <input
        type="checkbox"
        value={symptom}
        onChange={handleCheckboxChange}
        checked={checkedSymptoms.includes(symptom)}
      />
      {symptom}
    </label>
  ));

  const progress = (currentPage / 6) * 100;


  return (
    <div>
       {(currentPage === 1 || currentPage === 2 || currentPage === 3 || currentPage === 4 || currentPage === 5) && (
        <progress value={progress} max={100} />
        )}
      {currentPage === 1 && (
        <div>
          <h1>Which is your general health?</h1>
          <form onSubmit={handleSubmit}>
            <div className="container">
              <label htmlFor="halthRating">Health Rating:</label>
              <Slider
                id="healthRating"
                min={1}
                max={5}
                step={1}
                value={healthRating}
                onChange={(value)=> setHealthRating(value)}
                style={{ width: "100px" }}
                />
                <input
                type="number"
                min={1}
                max={5}
                value={healthRating}
                onChange={(e) => setHealthRating(e.target.value)}
                style={{ borderRadius: "5px", marginLeft: "25px" }}
                />
                </div>
                <button type="submit" id="next-button">Next</button>
                </form>
                </div>
                )}
                {currentPage === 2 && (
                      <div>
                        <h1>How old are you?</h1>
                        <form onSubmit={handleSubmit}>
                        <label key="age-input-label">
                        Age:
                        <input
                                    type="number"
                                    min={1}
                                    max={120}
                                    name="age"
                                    id="age-input"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    
                                  />
                        </label>
                        <button type="button" id="prev-button" onClick={previousPage}>
                  Previous
                </button>
                <button type="submit" id="next-button">Next</button>
                      </form>
    </div>
  )}
  {currentPage === 3 && (
    <div>
      <h1>Which symptoms have you shown?</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <input
            type="text"
            placeholder="Search symptoms"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {renderSymptoms}
        </div>

        <button type="button" id="prev-button" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" id="next-button">Next</button>
      </form>
    </div>
  )}
  {currentPage === 4 && (
    <div>
      <h1>{diagnosis}</h1>
      <form onSubmit={handleSubmit}>
        <p>{description}</p>
        <p>Precautions: {precautions}</p>
        <button type="button" id="prev-button" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" id="next-button">Next</button>
      </form>
    </div>
  )}

  {currentPage === 5 && (
    <div>
      <h1>Done!</h1>
      <form onSubmit={handleSubmit}>
        <p>Form submitted!</p>
        <button type="button" id="prev-button" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" id="next-button">Submit</button>
      </form>
    </div>
  )}
</div>
);
}
