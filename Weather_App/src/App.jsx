import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const currentDate = new Date();
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const formattedDate = `${months[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
  console.log("Today date: ", formattedDate);

  const API_KEY = "53efbfb8bd7756c937f2969070beb2c5";

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
      );

      const data = await response.json();

      if (data.cod !== 200) {
        setError(data.message);
        setWeatherData(null);
      } else {
        setError("");
        setWeatherData(data);
        console.log("Weather data: ", data);
      }

    } catch (err) {
      console.log("Error fetching weather data: ", err);
      setError("Failed to fetch data. Please try again.");
      setWeatherData(null);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  const getWeatherIconUrl = (main) => {
    switch (main) {
      case 'Clouds': return '/thunder.webp';
      case 'Rain': return '/rain_with_cloud.webp';
      case 'Mist': return '/tornado.webp';
      case 'Haze': return '/sun.webp';
      default: return '/sun.webp';
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="container_date">{formattedDate}</h1>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Enter city name"
            onChange={handleInputChange}
          />
          <button type="submit">Get</button>
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {weatherData && weatherData.weather && weatherData.main && (
          <div className="weather_data">
            <h2 className="container_city">{weatherData.name}</h2>

            <img
              className="container_img"
              src={getWeatherIconUrl(weatherData.weather[0].main)}
              width="100px"
              alt="Weather Icon"
            />

            <h2 className="container_degree">{weatherData.main.temp}°C</h2>
            <h2 className="country_per">{weatherData.weather[0].main}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
