import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { icon } from '../assets/icon.svg';

export default function MapView() {

  return (
    <MapContainer
      style={ { width: '100vw', height: '100vh' } }
      center={ [-23.556095935973328, -46.63865573423196] }
      zoom={ 13 }
      scrollWheelZoom={ false }
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={ [-23.601594231611685, -46.858858732657325] }>
        <Popup>Venha Conhecer</Popup>
      </Marker>
    </MapContainer>
  );
}
