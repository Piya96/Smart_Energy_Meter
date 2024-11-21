import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const StoreReadings = () => {
  const [smartMeterId, setSmartMeterId] = useState("");
  const [readings, setReadings] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create readings array from input
    const electricityReadings = readings.split(",").map((reading) => ({
      time: new Date().toISOString(),
      reading: parseFloat(reading),
    }));

    try {
      // Call the backend API
      await axios.post("http://localhost:55556/readings/store", {
        smartMeterId,
        electricityReadings,
      });
      alert("Readings stored successfully!");
    } catch (error) {
      console.error(error);
      alert("Error storing readings");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Store Electricity Readings
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Smart Meter ID"
          variant="outlined"
          value={smartMeterId}
          onChange={(e) => setSmartMeterId(e.target.value)}
          required
        />
        <TextField
          label="Electricity Readings (comma-separated)"
          variant="outlined"
          multiline
          rows={4}
          value={readings}
          onChange={(e) => setReadings(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default StoreReadings;
