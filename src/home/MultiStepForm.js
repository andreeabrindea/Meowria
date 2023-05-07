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

  useEffect(() => {
    axios.request({
      method: 'get',
      url: 'http://127.0.0.1:5000/symptoms'
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
    // Do something with the form data
    console.log(formData);
  };

  const renderSymptoms = symptoms.map((symptom) => 
  <label className="checkbox">
    <input type="checkbox" />
    { symptom }
  </label>
  );
  

  return (
    <div>
      {currentPage === 1 && (
        <div>
          <h1>Which is your general health?</h1>
          <form onSubmit={nextPage}>
          <label htmlor="health">Type:</label>
          <input id="health" name="health">
          </input>
            <button type="submit">Next</button>
          </form>
        </div>
      )}
      {currentPage === 2 && (
        <div>
          <h1>How old are you?</h1>
          <form onSubmit={nextPage}>
            <label>
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
          <h1>Which symptoms have you shown?</h1>
          <form onSubmit={nextPage}>
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
          <h1>Type of Priority:</h1>
          <form onSubmit={nextPage}>
         <p>Possible diagnose</p>
         <p>Consult a vet or find one on the map.</p>
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
          <form onSubmit={nextPage}>
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
