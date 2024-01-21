import React from "react";
import { useSelector } from "react-redux";
import MainMovieTitle from "./MainMovieTitle";
import MainMovieBg from "./MainMovieBg";

const MovieTrailerContainer = () => {
  const movie = useSelector((store) => store.movie?.selectedMovie);
  if (!movie) return;
  const { original_title, overview, id } = movie || {};
  
  return (
    <div>
      <MainMovieTitle title={original_title} overview={overview} />
      <MainMovieBg mainMovieId={id} />
    </div>
  );
};
export default MovieTrailerContainer;
