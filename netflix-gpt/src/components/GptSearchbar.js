import React from "react";
import { lang } from "../utils/languageConstant";
import { useSelector } from "react-redux";

function GptSearchbar() {
  const chosenLang = useSelector((store) => store.config?.lang);
  return (
    <div className="pt-[25%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[chosenLang].gptPlaceHolderText}
          className="p-3 m-3 col-span-9"
        />
        <button className="bg-red-600 text-white rounded-md p-3 m-3 col-span-3">
          {lang[chosenLang].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchbar;
