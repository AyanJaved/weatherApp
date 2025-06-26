import { useState } from "react";
import { Box, Typography } from "@mui/material";
import SearchForm from "./SearchForm";
import WeatherCard from "./WeatherCard";

export default function SearchBox() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [searchedCity, setSearchedCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        alert("City not found!");
        return;
      }

      const { latitude, longitude, name } = geoData.results[0];
      setSearchedCity(name);

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();
      setWeather(weatherData.current_weather);
    } catch (err) {
      console.error("Error:", err);
    }

    setCity("");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #83a4d4, #b6fbff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          background: "white",
          borderRadius: 3,
          p: 4,
          boxShadow: 3,
          width: "100%",
          maxWidth: 400,
        }}
      >
        <Typography variant="h4" textAlign="center" gutterBottom>
          🌦 Weather App
        </Typography>

        <SearchForm city={city} setCity={setCity} handleSubmit={handleSubmit} />

        {weather && <WeatherCard weather={weather} city={searchedCity} />}
      </Box>
    </Box>
  );
}
