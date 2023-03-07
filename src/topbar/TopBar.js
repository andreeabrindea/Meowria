import "./topbar.css";
import { Link } from "react-router-dom";
import logo from "./queenMeowria.png";
console.log(logo);
export default function TopBar() {
    return (
        <div className="TOP">
             <div className="topLeft">
             <img className="logoImg" src={logo} alt="cat"></img>
             </div>
             <div className="topCenter">
        <ul className="TopList">
          <li className="TopListItem"><Link
              className="link"
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </Link></li>
          <li className="TopListItem"><Link to="/clinics" style={{ textDecoration: "none", color: "inherit" }}>Clinics</Link></li>
          <li className="TopListItem"><Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>About</Link></li>
        </ul>
      </div>
        </div>
    )
}
