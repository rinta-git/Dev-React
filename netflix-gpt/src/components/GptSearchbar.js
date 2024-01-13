import React, { useRef } from "react";
import { lang } from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAI";
import {
  API_OPTIONS,
  GPT_QUERY_PART_1,
  GPT_QUERY_PART_2,
} from "../utils/constant";
import { addGptMovieResult } from "../utils/GptSlice";

function GptSearchbar() {
  const chosenLang = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const getSearchedMovies = async (movie) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();    
    return data.results;
  };

  const handleMovieSearching = async () => {
    const query =
      GPT_QUERY_PART_1 + searchText.current.value + GPT_QUERY_PART_2;
    const movieList = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    if (!movieList.choices) {
      console.log("not found");
    }
    let list = movieList.choices?.[0]?.message?.content.split(",");
    const data = list.map((movie) => getSearchedMovies(movie)); //return an array of promises because search is an sysnc fn
    const movieDetails = await Promise.all(data);
    
    dispatch(
      addGptMovieResult({ movieNames: list, movieResults: movieDetails })
    );
  };

  return (
    <div className="pt-[30%] md:pt-[20%] flex justify-center mx-3 md:mx-0">
      <form
        className="bg-black w-3/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[chosenLang].gptPlaceHolderText}
          className="p-3 m-3 col-span-9"
          ref={searchText}
        />
        <button
          className="bg-red-600 text-white rounded-md p-3 m-3 col-span-3"
          onClick={handleMovieSearching}
        >
          {lang[chosenLang].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchbar;
