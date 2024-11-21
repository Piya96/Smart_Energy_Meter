import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";

const ViewReadings = () => {
  const [smartMeterId, setSmartMeterId] = useState("");
  const [readings, setReadings] = useState([]);

  const handleFetchReadings = async () => {
    try {
      const response = await axios.get(
        `http://localhost:55556/readings/read/${smartMeterId}`
      );
      setReadings(response.data);
    } catch (error) {
      console.error("Error fetching readings:", error);
      alert("Error fetching readings");
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* Page Header */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#1976d2",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
        }}
      >
        View Electricity Readings
      </Typography>

      {/* Input and Button */}
      <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mb: 4,
        }}
        onSubmit={(e) => {
          e.preventDefault();
          handleFetchReadings();
        }}
      >
        <TextField
          label="Smart Meter ID"
          variant="outlined"
          value={smartMeterId}
          onChange={(e) => setSmartMeterId(e.target.value)}
          required
          sx={{ width: "300px" }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          Fetch Readings
        </Button>
      </Box>

      {/* Readings Table */}
      {readings.length > 0 && (
        <Box>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#1976d2" }}
          >
            Electricity Readings:
          </Typography>
          <TableContainer component={Paper} sx={{ boxShadow: 4 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                    Time
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontWeight: "bold", fontSize: "16px" }}
                  >
                    Reading (kWh)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {readings.map((reading, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {new Date(reading.time).toLocaleString()}
                    </TableCell>
                    <TableCell align="right">
                      {reading.reading.toFixed(2)} kWh
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Container>
  );
};

export default ViewReadings;
