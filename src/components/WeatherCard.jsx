import React from 'react';
import './WeatherCard.css';

function WeatherCard({ city, temperature, description, humidity }) {
  return (
    <div className="card-container">
      <div className="card-body">
        <h2 className="card-title">{city}</h2>
        <p className="card-temperature">{temperature}°C</p>
        <p className="card-description">{description}</p>
        <p className="card-humidity">Humidity: {humidity}%</p>
      </div>
    </div>
  );
}

export default WeatherCard;