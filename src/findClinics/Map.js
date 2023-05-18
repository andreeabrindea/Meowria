import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

class MapComponent extends Component {
  render() {
    const position = [46.766,23.5862]; // Cluj-Napoca coordinates

    return (
        
      <MapContainer center={position} zoom={13} style={{ height: "500px", width: "90%" }} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        <Marker position={[46.7712, 23.6236]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
          <Popup>
            Clinicilor 3-5
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export default MapComponent;
