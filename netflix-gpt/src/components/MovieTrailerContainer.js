import React from "react";
import { useSelector } from "react-redux";
import MainMovieTitle from "./MainMovieTitle";
import MainMovieBg from "./MainMovieBg";

const MovieTrailerContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovie);
  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie || {};
  
  return (
    <div>
      <MainMovieTitle title={original_title} overview={overview} />
      <MainMovieBg mainMovieId={id} />
    </div>
  );
};
export default MovieTrailerContainer;
