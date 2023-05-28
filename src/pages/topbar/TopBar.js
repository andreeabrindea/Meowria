import "./topbar.css";
import { Link } from "react-router-dom";
import icon from "./enter.png";
import account from "./telemedicine.png"
import logo from "./queenMeowria.png";
import jwt from 'jwt-decode';
import Cookies from 'js-cookie';
console.log(logo);

export default function TopBar() {
  const sessionToken = Cookies.get('sessionToken');
  const isLoggedIn = !!sessionToken;

  return (
    <div className="TOP">
      <div className="topLeft">
        <Link to="/">
          <img className="logoImg" src={logo} alt="cat" />
        </Link>
      </div>
      <div className="topCenter">
        {isLoggedIn ? (
          <ul className="TopList">
            <li className="TopListItem">
              <Link
                className="link"
                to="/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Home
              </Link>
            </li>
            <li className="TopListItem">
              <Link
                to="/clinics"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Emergency
              </Link>
            </li>
            <li className="TopListItem">
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                About
              </Link>
            </li>
            <li className="TopListItem">
              <Link to="/account">
                <img className="iconImg" src={account} alt="icon" />
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="TopList">
            <li className="TopListItem">
              <Link
                className="link"
                to="/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Home
              </Link>
            </li>
            <li className="TopListItem">
              <Link
                to="/clinics"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Emergency
              </Link>
            </li>
            <li className="TopListItem">
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                About
              </Link>
            </li>
            <li className="TopListItem">
              <Link to="/login">
                <img className="iconImg" src={icon} alt="icon" />
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
