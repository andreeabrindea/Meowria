import { useState, useEffect } from "react";
import axios from 'axios';
import "./multiStepForm.css";

export default function MultiStepForm() {
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
      setCheckedSymptoms([...checkedSymptoms, symptom]);
    } else {
      setCheckedSymptoms(checkedSymptoms.filter((s) => s !== symptom));
    }
  };

  const renderSymptoms = symptoms.map((symptom) => (
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

  return (
    <div>
      {currentPage === 1 && (
        <div>
          <h1>Which is your general health?</h1>
          <form onSubmit={handleSubmit}>
          <label htmlor="health">Type:</label>
          <input id="health" name="health"/>
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
          <h1>Which symptoms have you shown?</h1>
          <form onSubmit={handleSubmit}>
          <div className="container">
            { renderSymptoms } 
          </div>

            <button type="button" onClick={previousPage}>
              Previous
            </button>
            <button type="submit">Next</button>
          </form>
        </div>
      )}
         {currentPage === 4 && (
            <div>
              <h1>{diagnosis}</h1>
              <form onSubmit={handleSubmit}>
                {/* <p>{diagnosis}</p> */}
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
