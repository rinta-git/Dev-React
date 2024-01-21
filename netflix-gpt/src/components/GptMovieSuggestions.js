import React from "react";
import { useSelector } from "react-redux";
import MovieCategories from "./MovieCategories";

export default function GptMovieSuggestions() {
  const { gptSearchedMovies, gptMovieList } = useSelector((store) => store.gpt);
  if(!gptMovieList) return null
  return (
    <div className="p-3 m-10 bg-black opacity-80">
      {gptSearchedMovies.map((movie, index) => (
        <MovieCategories
          key={movie}
          title={movie}
          movies={gptMovieList[index]}
          isGpt={true}
        />
      ))}
    </div>
  );
}
