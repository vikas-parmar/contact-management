import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface MapProps {
  countries: any[]; // country data format here
}

const Map: React.FC<MapProps> = ({ countries }) => {
  const zoom = 2;

  return (
    <MapContainer
      zoom={zoom}
      className="w-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {countries.map((country) => (
        <Marker
          key={country.country}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Popup>
            <div>
              <h3>{country.country}</h3>
              <p>Active: {country.active}</p>
              <p>Recovered: {country.recovered}</p>
              <p>Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
