import React from "react";
import TopBar from "../topbar/TopBar";
import { Link, useNavigate } from "react-router-dom";
import icon from "./login.jpg";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Login = () => {
  const pages = ["Home", "Emergency", "About"];
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const data = {
    username: username,
    password: password,
  };

  useEffect(() => {
    const sessionToken = Cookies.get("sessionToken");
    if (sessionToken) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .request({
        method: "post",
        url: "https://meowriabackend.fly.dev/login",
        data: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        Cookies.set("sessionToken", response.data.session_token, {
          expires: new Date(response.data.expiry),
        });
        navigate("/home");
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
          <img className="login-img" src={icon} alt="doctor"></img>
          <form>
            <div className="login-form">
              <h1>Login</h1>
            </div>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="small-margin-bottom"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <span
              id="passwordError"
              style={{ color: "red" }}
              value={errorMessage}
              onChange={(event) => setErrorMessage(event.target.value)}
            ></span>
            <br />
            <div className="login-form">
              <button
                type="submit"
                id="login-button"
                className="small-action-button"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <br />
            <Link to="/register" className="small-padding">
              Or create a new account.
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
