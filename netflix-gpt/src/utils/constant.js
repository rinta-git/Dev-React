export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const FORM_BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_TMDB_KEY,
  },
};

export const MOVIE_PATH = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { id: "en", name: "EN" },
  { id: "de", name: "DE" },
  { id: "fr", name: "FR" },
];


export const GPT_QUERY_PART_1 = "Act as a Movie Recommendation system and suggest some movies for the query : "
export const GPT_QUERY_PART_2 = ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Vettam, Kilukkam, Don, 3 Idiots, Niram";