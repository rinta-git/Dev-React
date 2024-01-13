import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MovieTrailerContainer from "./MovieTrailerContainer";
import MovieListContainer from "./MovieListContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const isGptEnabled = useSelector((store) => store.gpt?.gptSearchOption);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div >
      <Header />
      {isGptEnabled ? (
        <GptSearch />
      ) : (
        <div className="bg-black">
          <MovieTrailerContainer />
          <MovieListContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
