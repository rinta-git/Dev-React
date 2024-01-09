import React from "react";
import MovieCard from "./MovieCard";

const MovieCategories = ({ title, movies }) => {
  return (
    <div className="px-4 ">
      <h1 className="text-white py-4 text-3xl ">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex ">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} poster={movie?.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCategories;
