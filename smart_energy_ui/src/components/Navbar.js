import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Smart Energy
        </Typography>
        <Button color="inherit" component={Link} to="/store-readings">
          Store Readings
        </Button>
        <Button color="inherit" component={Link} to="/view-readings">
          View Readings
        </Button>
        <Button color="inherit" component={Link} to="/compare-plans">
          Compare Plans
        </Button>
        <Button color="inherit" component={Link} to="/recommend-plans">
          Recommend Plans
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
