import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const upComingMovies = useSelector((store) => store.movie?.upComingMovies);
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    let response = await data.json();
    dispatch(addUpcomingMovies(response.results));
  };

  useEffect(() => {
    !upComingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
