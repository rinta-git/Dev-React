import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailerBg from "../customHooks/useMovieTrailerBg";

export default function MainMovieBg({ mainMovieId }) {
  const trailerVideo = useSelector((store) => store.movie?.mainTrailer);
  useMovieTrailerBg(mainMovieId);
  return (
    <div className="w-screen ">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
        allowFullScreen
      ></iframe>
    </div>
  );
}
