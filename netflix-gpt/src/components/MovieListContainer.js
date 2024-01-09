import { useSelector } from "react-redux";
import MovieCategories from "./MovieCategories";

const MovieListContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className=" bg-black">
      <div className="-mt-40 relative z-20 pl-6">
        <MovieCategories title="Now Playing" movies={movies?.nowPlayingMovie} />
        <MovieCategories title="Top Rated" movies={movies?.topRatedMovies} />
        <MovieCategories title="Popular" movies={movies?.popularMovies} />
        <MovieCategories title="Upcoming" movies={movies?.upComingMovies} />
      </div>
    </div>
  );
};
export default MovieListContainer;
