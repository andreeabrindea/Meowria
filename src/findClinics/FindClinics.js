import TopBar from "../topbar/TopBar";
import "./findClinics.css";
import MapComponent from "./Map";
export default function FindClinics() {
    return (
        <div className="FindClinics">
            <TopBar></TopBar>
            <div className="introduction">
            <p>Here you will find all the veterinarian clinics from Cluj-Napoca</p>
            </div>
        <div className="map">
            <MapComponent></MapComponent>
        </div>
    </div>
    )
}
