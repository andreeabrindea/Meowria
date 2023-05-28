import "./topbar.css";
import { Link } from "react-router-dom";
import icon from "./telemedicine.png";
import logo from "./queenMeowria.png";
console.log(logo);
export default function TopBarLogged() {
    return (
        <div className="TOP">
             <div className="topLeft">
             <Link to ="/"><img className="logoImg" src={logo} alt="cat"></img></Link>
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
          <li className="TopListItem"><Link to="/clinics" style={{ textDecoration: "none", color: "inherit" }}>Emergency</Link></li>
          <li className="TopListItem"><Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>About</Link></li>
          <li className="TopListItem"><Link to="#"><img className="iconImg" src={icon} alt="icon" /></Link></li>
        </ul>
      </div>
        </div>
    )
}
