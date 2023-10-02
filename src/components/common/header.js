import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { FaHome, FaSignInAlt, FaUser } from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{ flexGrow: 1 }}
        >
          <img
            src="movie-bazaar.png"
            alt="MovieBazaar Logo"
            height={"70px"}
            width={"70px"}
            style={{ borderRadius: "0px" }}
          />
        </Typography>
        <Link to={"/"}>
          <Button color="inherit">
            <FaHome /> Home
          </Button>
        </Link>
        <Button color="inherit" component={Link} to="/login">
          <FaSignInAlt /> Login
        </Button>
        <Button color="inherit" component={Link} to="/profile">
          <FaUser /> Profile
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;