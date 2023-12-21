import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
function MainMovieTitle(props) {
  const { title, overview } = props;
  return (
    <div className="pt-[20%] px-10 absolute w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="font-bold text-4xl text-white">{title}</h1>
      <p className="w-1/4 py-5 text-lg text-white">{overview}</p>
      <button className="bg-white text-black font-bold p-3 px-4 rounded-md hover:bg-opacity-80">
        <FontAwesomeIcon icon={faPlay}/> Play Now
      </button>
      <button className="bg-gray-500 text-white p-3 px-4 mx-2 rounded-md bg-opacity-50 hover:bg-opacity-80">
      <FontAwesomeIcon icon={faInfoCircle} /> More info
      </button>
    </div>
  );
}

export default MainMovieTitle;
