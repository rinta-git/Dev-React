import React from "react";
import GptSearchbar from "./GptSearchbar";
import { FORM_BG_IMG } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";

function GptSearch() {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={FORM_BG_IMG} alt="background" />
      </div>
      <GptSearchbar />
      <GptMovieSuggestions />
    </div>
  );
}

export default GptSearch;
