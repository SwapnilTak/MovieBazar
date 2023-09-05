// import "./MoviePage.css"; // Import the CSS file

import {
    Card,
    CardContent,
    CardMedia,
    Container,
    Rating,
    Typography,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  
  import Footer from "./common/footer";
  import Header from "./common/header";
  import MovieData from "../constants/movieData.js"; // Assume you have an array of movie data
  import axios from "axios";
  import { useParams } from "react-router-dom"; // Import useParams to get dynamic parameters from the URL
  
  const MoviePage = () => {
    const [movieData, setMovieData] = useState();
    const { movieId } = useParams();
    // Handle case where the movie is not found
  
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
        setMovieData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      getMoviesData();
    }, []);
    // Get the dynamic movieId parameter from the URL
  
    // Find the movie data using the movieId
    const selectedMovie =
      movieData && movieData.find((movie) => movie.id === movieId);
    //   const selectedMovie = MovieData[0];
  
    //   if (!selectedMovie) {
    //     return <div>Movie not found</div>;
    //   }
    return (
      <>
        {selectedMovie ? (
          <div>
            <Header />
            <main className="movie-page">
              <Container>
                <Card>
                  <CardMedia
                    style={{ marginTop: "40px", objectFit: "contain" }}
                    component="img"
                    height="300"
                    image={selectedMovie.image}
                    alt={selectedMovie.title}
                  />
                  <CardContent style={{ height: "35vh" }}>
                    <Typography variant="h4">{selectedMovie.title}</Typography>
                    <Rating
                      name="movie-rating"
                      value={parseFloat(selectedMovie.rating)}
                      precision={0.5}
                      readOnly
                    />
                    <Typography variant="subtitle1">
                      {/* Director: {selectedMovie.director.join(", ")} */}
                      Year :
                    </Typography>
                    <Typography variant="subtitle2">
                      {/* Genre: {selectedMovie.genre.join(", ")}/ */}
                      Genre:
                    </Typography>
                    <Typography variant="body1">
                      {selectedMovie.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Container>
            </main>
            <Footer />
          </div>
        ) : (
          <div>Movie not found</div>
        )}
      </>
    );
  };
  
  export default MoviePage;