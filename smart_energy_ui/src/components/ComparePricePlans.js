import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const ComparePricePlans = () => {
  const [smartMeterId, setSmartMeterId] = useState("");
  const [comparisons, setComparisons] = useState(null);

  const handleCompare = async () => {
    try {
      const response = await axios.get(
        `http://localhost:55556/price-plans/compare-all/${smartMeterId}`
      );
      setComparisons(response.data);
    } catch (error) {
      console.error(error);
      alert("Error fetching comparisons");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Compare Price Plans
      </Typography>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleCompare();
        }}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Smart Meter ID"
          variant="outlined"
          value={smartMeterId}
          onChange={(e) => setSmartMeterId(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Compare Plans
        </Button>
      </Box>
      {comparisons && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Price Plan Comparisons:</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Price Plan</TableCell>
                  <TableCell align="right">Cost (USD)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(comparisons.pricePlanComparisons).map(
                  ([plan, cost]) => (
                    <TableRow key={plan}>
                      <TableCell>{plan}</TableCell>
                      <TableCell align="right">{cost}</TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Container>
  );
};

export default ComparePricePlans;
