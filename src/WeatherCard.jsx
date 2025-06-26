import { Card, CardContent, Typography, Stack } from "@mui/material";

export default function WeatherCard({ weather, city }) {
  if (!weather || !weather.temperature) {
    return null; // or return a fallback component
  }

  return (
    <Card
      sx={{
        mt: 4,
        backgroundColor: "#f5f5f5",
        boxShadow: 2,
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Weather in {city}
        </Typography>

        <Stack spacing={1}>
          <Typography>🌡 Temp: {weather.temperature}°C</Typography>
          <Typography>💨 Wind: {weather.windspeed} km/h</Typography>
          <Typography>🕒 Time: {weather.time}</Typography>
          <Typography color="text.secondary">
            Weather Code: {weather.weathercode}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
