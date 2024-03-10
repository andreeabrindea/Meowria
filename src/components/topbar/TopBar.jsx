import logo from "./queenMeowria.png";
import { Link } from "react-router-dom";

export default function TopBar({ items }) {
  return (
    <div className="top-bar">
      <img className="logo-image" src={logo}></img>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="page-link">
            <Link to={`/${item.toLowerCase()}`}  style={{textDecoration: "none", color: "inherit"}}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
