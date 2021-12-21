import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

class MapView extends React.Component {
  render() {
    return (
      <MapContainer center={ [-23.5489, -46.6388] } zoom={ 10 } scrollWheelZoom={ false }>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={ [-23.60183277855635, -46.85877523519128] }>
          <Popup>
            You are here!
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export default MapView;
