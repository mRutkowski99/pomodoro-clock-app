import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pomodoro: 15,
  shortBreak: 5,
  longBreak: 10,
};

const timerSlice = createSlice({
  name: "timer",
  initialState: initialState,
  reducers: {},
});

export const timerActions = timerSlice.actions;
export default timerSlice;
