import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchOption: false,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.gptSearchOption = !state.gptSearchOption;
    },
  },
});

export const { toggleGptSearch } = gptSlice.actions;
export default gptSlice.reducer;
