import React from "react";
import MovieCard from "./MovieCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carousalMwebStyles } from "../utils/constant";
const MovieCategories = ({ title, movies, isGpt }) => {
  return (
    <div className="px-4 ">
      <h1 className="text-white py-4 lg:text-3xl text-2xl">{title}</h1>
      <div style={{ position: "relative" }}>
        <Carousel
          responsive={carousalMwebStyles}
          infinite={true}    
          className="movie-carousal"      
        >
          {movies ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} poster={movie?.poster_path} movieDetails={movie} isGpt={isGpt || ''}  />
            ))
          ) : (
            <div />
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default MovieCategories;
