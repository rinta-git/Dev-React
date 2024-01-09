import { createSlice } from "@reduxjs/toolkit";

const config = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    addLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { addLanguage } = config.actions;
export default config.reducer;
