import React from "react";
import { MOVIE_PATH } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addSelectedMovie } from "../utils/movieSlice";

const MovieCard = ({ poster, movieDetails, isGpt }) => {
  const dispatch = useDispatch();
  const handlePopUp = function () {
    if (!isGpt) dispatch(addSelectedMovie(movieDetails));
  };
  return (
    <div className="pr-4 w-36 cursor-pointer" onClick={handlePopUp}>
      <img alt="movie poster" src={MOVIE_PATH + poster} />
    </div>
  );
};

export default MovieCard;
