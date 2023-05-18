import { useState, useEffect } from "react";
import axios from 'axios';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./multiStepForm.css";

export default function MultiStepFormv2() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    address: "",
  });
  const [symptoms, setSymptoms] = useState([]);
  const [checkedSymptoms, setCheckedSymptoms] = useState([]);
  const [diagnosis, setDiagnosis] = useState("");
  const [healthRating, setHealthRating] = useState(1); // Add healthRating state

  useEffect(() => {
    axios.request({
      method: 'get',
      url: 'https://meowria-be.fly.dev/symptoms'
    })
    .then((response) => setSymptoms(response.data.symptoms)) 
    .catch((error) => console.log(error));
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    console.log(checkedSymptoms);
  
    if (currentPage === 3) {
      const symptomsJson = { symptoms: checkedSymptoms };
      axios.post('https://meowria-be.fly.dev/predict', symptomsJson)
        .then(function (response) {
          console.log(response);
          setDiagnosis(response.data.disease); // change the property to disease
          nextPage();
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      nextPage();
    }
  };

  const handleCheckboxChange = (event) => {
    const symptom = event.target.value;
    const isChecked = event.target.checked;
  
    if (isChecked) {
      setCheckedSymptoms((prevCheckedSymptoms) => [...prevCheckedSymptoms, symptom]);
    } else {
      setCheckedSymptoms((prevCheckedSymptoms) =>
        prevCheckedSymptoms.filter((s) => s !== symptom)
      );
    }
  
    setSelectedSymptoms((prevSelectedSymptoms) =>
      isChecked
        ? [...prevSelectedSymptoms, symptom]
        : prevSelectedSymptoms.filter((s) => s !== symptom)
    );
  };
  

  const [searchQuery, setSearchQuery] = useState("");
  const [matchingSymptoms, setMatchingSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const matchedSymptoms = symptoms.filter((symptom) =>
      symptom.toLowerCase().includes(query.toLowerCase())
    );
    setMatchingSymptoms(matchedSymptoms);
  };

  const handleSelectSymptom = (symptom) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
      setCheckedSymptoms([...checkedSymptoms, symptom]);
    }
  };

  const handleRemoveSymptom = (symptom) => {
    setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
  };


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
                      onChange={(value) => setHealthRating(value)}
                      style={{ width: "200px" }} // Adjust the width here
                />
                <input
                  type="number"
                  min={1}
                  max={5}
                  value={healthRating}
                  onChange={(e) => setHealthRating(e.target.value)}
                  />
        </div>
        <button type="submit">Next</button>
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
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <button type="button" onClick={previousPage}>
          Previous
        </button>
        <button type="submit">Next</button>
      </form>
    </div>
  )}

{currentPage === 3 && (
  <div>
    <div className="fixed-search-input">
      <input
        type="text"
        placeholder="Search symptoms..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
    <div className="matching-symptoms">
      {searchQuery &&
        matchingSymptoms.map((symptom) => (
          <div
            key={symptom}
            className="matching-symptom"
            onClick={() => handleSelectSymptom(symptom)}
          >
            <label>
              <input
                type="checkbox"
                value={symptom}
                checked={selectedSymptoms.includes(symptom)}
                onChange={handleCheckboxChange}
              />
              {symptom}
            </label>
          </div>
        ))}
    </div>
    <div className="container">
      {selectedSymptoms.map((symptom) => (
        <div key={symptom}>
          <label>
            <input
              type="checkbox"
              value={symptom}
              checked={selectedSymptoms.includes(symptom)}
              onChange={() => handleRemoveSymptom(symptom)}
            />
            {symptom}
          </label>
        </div>
      ))}
    </div>
    <button type="button" onClick={previousPage}>
      Previous
    </button>
    <button type="submit">Next</button>
  </div>
)}




  {currentPage === 4 && (
    <div>
      <h1>{diagnosis}</h1>
      <form onSubmit={handleSubmit}>
        <p>Consult a doctor.</p>
        <button type="button" onClick={previousPage}>
          Previous
        </button>
        <button type="submit">Next</button>
      </form>
    </div>
  )}

  {currentPage === 5 && (
    <div>
      <h1>Send the results to e-mail:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <button type="button" onClick={previousPage}>
          Previous
        </button>
        <button type="submit">Next</button>
</form>
</div>
)}
  {currentPage === 6 && (
    <div>
      <h1>Done!</h1>
      <form onSubmit={handleSubmit}>
        <p>Form submitted!</p>
        <button type="button" onClick={previousPage}>
          Previous
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  )}
</div>
);
}
