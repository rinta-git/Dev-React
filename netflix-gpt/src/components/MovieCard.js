import React from "react";
import { MOVIE_PATH } from "../utils/constant";

const MovieCard = ({ poster }) => {
  return (
    <div className="pr-4 w-36 cursor-pointer">
      <img alt="movie poster" src={MOVIE_PATH + poster} />
    </div>
  );
};

export default MovieCard;
