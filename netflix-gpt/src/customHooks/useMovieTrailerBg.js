import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMainTrailer } from "../utils/movieSlice";

const useMovieTrailerBg = (mainMovieId) => {
  
  const dispatch = useDispatch();
  const mainMovieUrl =
    "https://api.themoviedb.org/3/movie/" + mainMovieId + "/videos";
  const getTrailer = async () => {
    let data = await fetch(mainMovieUrl, API_OPTIONS);
    let response = await data.json();
    let trailer = response?.results?.filter(
      (video) => video.type === "Trailer" && video.name === "Official Trailer"
    );
    if (!trailer) {
      trailer = response?.results[0];
    }
    dispatch(addMainTrailer(trailer[0]));
  };
  useEffect(() => {
    getTrailer();
  }, []);
};
export default useMovieTrailerBg;
