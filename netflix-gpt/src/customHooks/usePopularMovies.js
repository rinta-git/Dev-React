import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const popularMovies = useSelector((store) => store.movie?.popularMovies);
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    let response = await data.json();
    dispatch(addPopularMovies(response.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
