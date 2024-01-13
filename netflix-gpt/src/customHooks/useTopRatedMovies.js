import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const topRatedMovies = useSelector((store) => store.movie?.topRatedMovies);
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    let response = await data.json();
    dispatch(addTopRatedMovies(response.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
