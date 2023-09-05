import "../styles/footer.css"; // Import your CSS file

import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <AppBar position="static" color="primary" className="footer">
      <Container>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <img
              src="movie-bazaar.png"
              alt="BollywoodBazaar Logo"
              height={"70px"}
              width={"70px"}
              style={{ borderRadius: "19px" }}
            />
          </Typography>
          <div className="social-icons">
            <IconButton color="inherit">
              <FaFacebook />
            </IconButton>
            <IconButton color="inherit">
              <FaTwitter />
            </IconButton>
            <IconButton color="inherit">
              <FaInstagram />
            </IconButton>
          </div>
        </Toolbar>
        <Typography variant="body2" color="inherit" align="center">
          &copy; 2023 BollywoodBazaar
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Footer;