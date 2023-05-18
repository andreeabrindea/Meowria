import TopBar from "../topbar/TopBar";
import "./register.css";
import icon from "./register.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Register() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("")
  const [surname, setSurname] = useState("")
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * 1000) + 1;
    // Create a data object with the username and password
    const data = {
      id: id,
      firstname: firstname,
      surname: surname,
      username: username,
      email: email,
      password: password
    };

    // Make the POST request
    fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        // Handle the response
        if (response.ok) {
           navigate("/");
          
        } else {
          setErrorMessage("Invalid");
        }
      })
      .catch((error) => {
        console.log(error)
        setErrorMessage("An error occurred. Please try again later.");
      });
  };

  return (  
    <div className="register-page">
      <TopBar></TopBar>

      <div className="register-form">
      <img className="register-img" src={icon} alt="doctor"></img>
      <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <label htmlFor="firstname">Firstname:</label>
          <input type="text" id="firstname" name="firstname"  value={firstname}
            onChange={(event) => setFirstname(event.target.value)} required /><br />

          <label htmlFor="surname">Surname:</label>
          <input type="text" id="surname" name="surname"  value={surname}
            onChange={(event) => setSurname(event.target.value)} required /><br />

          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username"  value={username}
            onChange={(event) => setUsername(event.target.value)}required /><br />

          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email"  value={email}
            onChange={(event) => setEmail(event.target.value)} required /><br />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password}
            onChange={(event) => setPassword(event.target.value)} required /><br />
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" required /><br />
          <span id="passwordError" style={{ color: "red" }}>{errorMessage}</span><br />
          <input type="submit" value="Register" id="registerBtn" />
          <button><Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>Login</Link></button>
        </form>
      </div>
    </div>
  );
}
