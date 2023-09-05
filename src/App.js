import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/homePage";
import LoginPage from "./components/loginPage";
import MoviePage from "./components/moviePage";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/movie/:movieId" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// npm install @mui/material @emotion/react @emotion/styled

// https://rapidapi.com/rapihub-rapihub-default/api/imdb-top-100-movies