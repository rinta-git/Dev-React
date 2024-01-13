import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstant";
function MainMovieTitle(props) {
  const { title, overview } = props;
  const chosenLang = useSelector((store) => store.config?.lang);
  return (
    <div className="pt-[41%] md:pt-[20%] px-10 absolute w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="font-bold text-2xl text-white md:text-4xl md:pb-0 pb-3">{title}</h1>
      <p className="w-1/4 py-5 text-lg text-white hidden md:block">{overview}</p>
      <button className="bg-white text-black font-bold md:p-3 md:px-4 p-2 rounded-md hover:bg-opacity-80 text-[12px] md:text-base">
        <FontAwesomeIcon icon={faPlay} /> {lang[chosenLang].playNowBtn}
      </button>
      <button className="bg-gray-500 text-white md:p-3 md:px-4 p-2 mx-2 rounded-md bg-opacity-50 hover:bg-opacity-80 text-[12px] md:text-base">
        <FontAwesomeIcon icon={faInfoCircle} /> {lang[chosenLang].moreInfoBtn}
      </button>
    </div>
  );
}

export default MainMovieTitle;
