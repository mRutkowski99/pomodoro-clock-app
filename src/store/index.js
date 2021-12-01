import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import timerSlice from "./timerSlice";
import modalSlice from "./modalSlice";

const store = configureStore({
  reducer: {
    timer: timerSlice.reducer,
    theme: themeSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export default store;
