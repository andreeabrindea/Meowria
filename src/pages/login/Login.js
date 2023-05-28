import TopBar from "../topbar/TopBar";
import "./login.css";
import icon from "./login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    // Check if the user is already logged in (e.g., on page load)
    const sessionToken = Cookies.get("sessionToken");
    if (sessionToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (response) => {
    if (response.ok) {
      // Handle successful login
      response.json().then((data) => {
        Cookies.set("sessionToken", data.session_token, { expires: new Date(data.expiry) });
        setIsLoggedIn(true);
        navigate("/");
      });
    } else {
      setErrorMessage("Invalid username or password.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password
    };

    fetch("https://meowriabackend.fly.dev/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(handleLogin)
      .catch(() => {
        setErrorMessage("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="login-page">
      <TopBar></TopBar>

      <div className="login-form">
        <img className="login-img" src={icon} alt="doctor"></img>
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <br />
          <span id="passwordError" style={{ color: "red" }}>{errorMessage}</span>
          <br />
          <button type="submit" id="login-button">Login</button>
          <button id="registerBtn">
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Register
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}
