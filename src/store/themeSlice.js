import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  font: "Kumbh Sans",
  color: "#F87070",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setTheme(state, action) {
      const { font, color } = action.payload;
      state.color = color;
      state.font = font;
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice;
