import { TextField, Button } from "@mui/material";

export default function SearchForm({ city, setCity, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="City Name"
        variant="outlined"
        fullWidth
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" fullWidth type="submit">
        Search
      </Button>
    </form>
  );
}
