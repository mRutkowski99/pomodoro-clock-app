import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { isShown: false },
  reducers: {
    showModal(state) {
      state.isShown = true;
    },

    hideModal(state) {
      state.isShown = false;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice;
