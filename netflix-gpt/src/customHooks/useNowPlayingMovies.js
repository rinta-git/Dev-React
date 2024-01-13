import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const nowPlayingMovie = useSelector((store) => store.movie?.nowPlayingMovie);
  
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );
    let response = await data.json();
    dispatch(addNowPlayingMovies(response.results));
  };

  useEffect(() => {
    !nowPlayingMovie && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
