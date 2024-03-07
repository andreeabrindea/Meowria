import TopBar from "../topbar/TopBar";
import "./register.css";
import icon from "./register.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from 'js-cookie';


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
    const data = {
      firstname: firstname,
      surname: surname,
      username: username,
      email: email,
      password: password
    };

    fetch("https://meowriabackend.fly.dev/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((response) => {

        if (!response) {
          setErrorMessage("Username already exists");
        } else {
          Cookies.set("sessionToken", response.session_token, { expires: new Date(response.expiry) });
           navigate("/");
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
          <button type="submit" id="registerBtn">Register</button>
          <button id="login-button"><Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>Login</Link></button>
        </form>
      </div>
    </div>
  );
}
