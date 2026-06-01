import { useState } from "react";
import "./Weather.css";

function Weather() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);
  let [error, setError] = useState("");

  let apiKey = process.env.REACT_APP_WEATHER_KEY;

  async function getWeather() {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    let data = await response.json();
    if (data.cod === 200) {
      setWeather(data);
      setError("");
    } else {
      setError("City not found!");
      setWeather(null);
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      getWeather();
    }
  }

  return (
    <div className="weather-app">
      <h1>Weather App 🌤️</h1>
      <input
        type="text"
        placeholder="Enter city name"
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={getWeather}>Search</button>
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <h3>{weather.main.temp}°C</h3>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;