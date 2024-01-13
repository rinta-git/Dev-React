import { useSelector } from "react-redux";
import MovieCategories from "./MovieCategories";
import { lang } from "../utils/languageConstant";

const MovieListContainer = () => {
  const movies = useSelector((store) => store.movie);
  const chosenLang = useSelector((store) => store.config?.lang);
  return (
    <div className=" bg-black">
      <div className="md:-mt-40 mt-5 relative z-20 pl-6">
        <MovieCategories
          title={lang[chosenLang].movieCategoriesTitle.nowPlaying}
          movies={movies?.nowPlayingMovie}
        />
        <MovieCategories
          title={lang[chosenLang].movieCategoriesTitle.topRated}
          movies={movies?.topRatedMovies}
        />
        <MovieCategories
          title={lang[chosenLang].movieCategoriesTitle.popular}
          movies={movies?.popularMovies}
        />
        <MovieCategories
          title={lang[chosenLang].movieCategoriesTitle.upComing}
          movies={movies?.upComingMovies}
        />
      </div>
    </div>
  );
};
export default MovieListContainer;
