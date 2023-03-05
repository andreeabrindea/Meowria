import "./topbar.css";
import logo from "./queenMeowria.png";
console.log(logo);
export default function TopBar() {
    return (
        <div className="TOP">
             <div className="topLeft">
             <img className="logoImg" src={logo} alt="cat" height="100"></img>
             </div>
             <div className="topCenter">
        <ul className="TopList">
          <li className="TopListItem">Home</li>
          <li className="TopListItem">Find Clinics</li>
          <li className="TopListItem">About</li>
        </ul>
      </div>
        </div>
    )
}
