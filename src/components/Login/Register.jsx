import React from "react";
import TopBar from "../topbar/TopBar";
import { Link, useNavigate } from "react-router-dom";
import icon from "./register.jpg";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const pages = ["Home", "Emergency", "About"];

const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const data = {
    firstname: firstname,
    surname: surname,
    username: username,
    email: email,
    password: password,
  };

  const verifyPassword = () => {
    if (password !== confirmpassword) {
      return false;
    }

    return true;
  };

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    axios
      .request({
        method: "POST",
        url: "https://meowriabackend.fly.dev/register",
        headers: {
          "Content-Type": "application/json",
        },

        data: JSON.stringify(data),
      })
      .then((response) => {
        if (verifyPassword()) {
          Cookies.set("sessionToken", response.data.session_token, {
            expires: new Date(response.data.expiry),
          });
          navigate("/");
        } else {
          setErrorMessage("Passwords do not match.");
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <>
      <TopBar items={pages}></TopBar>
      <div className="login-form">
        <div className="login-form">
          <img className="login-img" alt="doctor" src={icon}></img>
          <form>
            <div className="login-form">
              <h1>Register</h1>
            </div>
            <input
              type="text"
              id="first-name"
              name="First Name"
              placeholder="First Name"
              className="small-margin-bottom"
              onChange={(event) => setFirstName(event.target.value)}
              value={firstname}
            />
            <br />
            <input
              type="text"
              id="surname"
              name="Surname"
              placeholder="Surname"
              className="small-margin-bottom"
              onChange={(event) => setSurname(event.target.value)}
              value={surname}
            />
            <br />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="small-margin-bottom"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
            />
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="small-margin-bottom"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="small-margin-bottom"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            <br />
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm Password"
              className="small-margin-bottom"
              onChange={(event) => setConfirmPassword(event.target.value)}
              value={confirmpassword}
            />
            <br></br>
            <span
              id="passwordError"
              style={{ color: "red" }}
              onChange={(event) => setErrorMessage(event.target.value)}
            >
              {" "}
              {errorMessage}
            </span>
            <br />
            <div className="login-form">
              <button
                type="submit"
                id="login-button"
                className="small-action-button"
                onClick={handleRegister}
              >
                Sign up
              </button>
            </div>
            <br />
            <Link to="/login" className="small-padding">
              Or enter your account.
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
