import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MovieTrailerContainer from "./MovieTrailerContainer";
import MovieListContainer from "./MovieListContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MovieTrailerContainer />
      <MovieListContainer />
    </div>
  );
};

export default Browse;
