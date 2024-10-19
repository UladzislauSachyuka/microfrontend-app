import React, { useState, useEffect } from "react";
import "./Weather.css";

const cities = ["New York", "Los Angeles", "Chicago", "San Francisco", "Seattle", "Minsk", "Moscow"];
const API_KEY = "facb98886eca2c40ec749a945981053b";

const Weather: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>("New York");
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, [selectedCity]);

  return (
    <div className="weatherContainer">
      <h2>Weather Information</h2>
      <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      {weather && (
        <div className="weatherInfo">
          <p>{weather.name}</p>
          <p>{weather.main.temp} °C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
