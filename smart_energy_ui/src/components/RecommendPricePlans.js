import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  List,
  ListItem,
  Divider,
} from "@mui/material";

const RecommendPricePlans = () => {
  const [smartMeterId, setSmartMeterId] = useState("");
  const [limit, setLimit] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const handleRecommend = async () => {
    try {
      const response = await axios.get(
        `http://localhost:55556/price-plans/recommend/${smartMeterId}`,
        {
          params: { limit }, // Passing the limit as a query parameter
        }
      );
      setRecommendations(response.data);
    } catch (error) {
      console.error(error);
      alert("Error fetching recommendations");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Recommend Cheapest Price Plans
      </Typography>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleRecommend();
        }}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "#f9f9f9",
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <TextField
          label="Smart Meter ID"
          variant="outlined"
          value={smartMeterId}
          onChange={(e) => setSmartMeterId(e.target.value)}
          required
        />
        <TextField
          label="Limit (Optional)"
          type="number"
          variant="outlined"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Get Recommendations
        </Button>
      </Box>
      {recommendations.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Recommendations:
          </Typography>
          <List>
            {recommendations.map((rec, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <Typography>
                    {index + 1}. Price Plan: {rec.key} - Cost: {rec.value} USD
                  </Typography>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Box>
      )}
    </Container>
  );
};

export default RecommendPricePlans;
