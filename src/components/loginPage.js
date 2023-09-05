import "./styles/login.css"; // Import the CSS file

import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import Footer from "./common/footer";
import Header from "./common/header";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div>
      <Header />
      <main className="login-page">
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6} lg={4}>
              <Card>
                <CardContent>
                  <h2>Login to BollywoodBazaar</h2>
                  <form onSubmit={handleLogin}>
                    <TextField
                      label="Username or Email"
                      variant="outlined"
                      fullWidth
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      margin="normal"
                      required
                    />
                    <TextField
                      label="Password"
                      variant="outlined"
                      fullWidth
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      margin="normal"
                      required
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Login
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;