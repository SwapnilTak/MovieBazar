import "./styles/homePage.css";

import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import Footer from "./common/footer";
import Header from "./common/header";
import { Link } from "react-router-dom";
// import MovieData from "../constants/movieData";
import axios from "axios";

// import axios from "axios";

const HomePage = () => {
  const [movieData, setMovieData] = useState();

  const options = {
    method: "GET",
    url: "https://imdb-top-100-movies.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": "f4c4e7dc52msheb64b561256f5a6p1131eajsn8cf53d7c4f7c",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  async function getMoviesData() {
    try {
      const response = await axios.request(options);
      console.log(response.data);

      setMovieData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMoviesData();
  }, []);

  // const options = {
  //   method: "GET",
  //   url: "https://imdb-top-100-movies.p.rapidapi.com/",
  //   headers: {
  //     "X-RapidAPI-Key": "4ccee5bd54msh4f6d603d7e7458ep1bf7fcjsn700bc5c0b768",
  //     "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  //   },
  // };

  // async function getMoviesData() {
  //   try {
  //     const response = await axios.request(options);
  //     setMovieData(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   getMoviesData();
  // }, []);
  return (
    <div>
      <Header />
      <main className="home-page">
        <Container>
          <h2>Featured Movies</h2>
          <Paper
            className="banner"
            style={{ backgroundImage: "url('banner.jpg')" }}
          >
            <Typography variant="h4" className="banner-content">
              Top Rated 100 Movies
            </Typography>
          </Paper>
          <Grid container spacing={2}>
            {movieData &&
              movieData.map((movie, index) => {
                // if (movie.genre[0] == "Drama") {
                return (
                  <>
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Link to={`/movie/${movie.id}`}>
                        <Card>
                          <CardMedia
                            component="img"
                            height="300"
                            image={movie.image}
                            alt={movie.title}
                          />
                          <CardContent>
                            <Typography variant="h6">{movie.title}</Typography>
                            <Rating
                              name="movie-rating"
                              value={Number(movie.rating) / 2}
                              precision={0.5}
                              readOnly
                            />
                          </CardContent>
                        </Card>
                      </Link>
                    </Grid>
                  </>
                );
                // }
              })}
          </Grid>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;