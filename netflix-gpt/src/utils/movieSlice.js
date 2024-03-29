import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
    mainTrailer: null,
    selectedMovie:null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addMainTrailer: (state, action) => {
      state.mainTrailer = action.payload;
    },
    addSelectedMovie:(state, action) =>{
      state.selectedMovie = action.payload
    }
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addMainTrailer,
  addSelectedMovie
} = movieSlice.actions;
export default movieSlice.reducer;
