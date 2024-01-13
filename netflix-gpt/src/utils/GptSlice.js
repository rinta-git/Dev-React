import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchOption: false,
    gptSearchedMovies: null,
    gptMovieList: null,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.gptSearchOption = !state.gptSearchOption;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.gptSearchedMovies = movieNames;
      state.gptMovieList = movieResults;
    },
    clearGptMovieSearch: (state, action) => {
      state.gptSearchOption = null;
      state.gptMovieList = null;
    },
  },
});

export const { toggleGptSearch, addGptMovieResult, clearGptMovieSearch } = gptSlice.actions;
export default gptSlice.reducer;
