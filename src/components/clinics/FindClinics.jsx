import TopBar from "../topbar/TopBar";
import MapComponent from "./Map";
import Cookies from "js-cookie";

export default function FindClinics() {
  const sessionToken = Cookies.get("sessionToken");
  const isLoggedIn = !!sessionToken;
  const pages = isLoggedIn
    ? ["Home", "Emergency", "About", "Account"]
    : ["Home", "Emergency", "About"];

  return (
    <div className="FindClinics">
      <TopBar items={pages}></TopBar>
      <div className="introduction">
        <p>Here you will find all the emergency departments from Cluj-Napoca</p>
      </div>
      <div className="map">
        <MapComponent></MapComponent>
      </div>
    </div>
  );
}
