import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import StoreReadings from "./components/StoreReadings";
import ViewReadings from "./components/ViewReadings";
import ComparePricePlans from "./components/ComparePricePlans";
import RecommendPricePlans from "./components/RecommendPricePlans";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/store-readings" element={<StoreReadings />} />
        <Route path="/view-readings" element={<ViewReadings />} />
        <Route path="/compare-plans" element={<ComparePricePlans />} />
        <Route path="/recommend-plans" element={<RecommendPricePlans />} />
      </Routes>
    </Router>
  );
}

export default App;
