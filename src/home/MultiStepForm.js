import { useState } from "react";
import "./multiStepForm.css";
export default function MultiStepForm() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    address: "",
  });

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

  return (
    <div>
      {currentPage === 1 && (
        <div>
          <h1>What breed is your cat?</h1>
          <form onSubmit={nextPage}>
          <label for="breed">Choose a breed:</label>
<select id="breeds" name="breeds">
  <option value="siamese">Siamese</option>
  <option value="tabby">Tabby</option>
  <option value="maine">Maine Coon</option>
  <option value="persian">Persian</option>
</select>
            <button type="submit">Next</button>
          </form>
        </div>
      )}
      {currentPage === 2 && (
        <div>
          <h1>How old is your cat?</h1>
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
          <h1>Which symptoms has your cat shown?</h1>
          <form onSubmit={nextPage}>
          <div class="container">
            <label class="checkbox">
                <input type="checkbox" />
                Checkbox 1
            </label>
            <label class="checkbox">
                <input type="checkbox" />
                Checkbox 2
            </label>
            <label class="checkbox">
                <input type="checkbox" />
                Checkbox 3
            </label>
            <label class="checkbox">
                <input type="checkbox" />
                Checkbox 4
            </label>
            <label class="checkbox">
                <input type="checkbox" />
                Checkbox 5
            </label>
            <label class="checkbox">
                <input type="checkbox" />
                Checkbox 6
            </label>
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
         <p>FIP</p>
         <p>Cold</p>
         <button type="button" onClick={previousPage}>
              Previous
            </button>
            <button type="submit">Next</button>
          </form>
        </div>
      )}
          {currentPage === 5 && (
        <div>
          <h1>Send the results to e-mail</h1>
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
          <h2>Page 3</h2>
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
