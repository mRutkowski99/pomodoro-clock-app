import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pomodoro: 25 * 60, //in seconds
  shortBreak: 5 * 60,
  longBreak: 10 * 60,
  activeTimer: "pomodoro",
  initialTime: 25 * 60,
};

const timerSlice = createSlice({
  name: "timer",
  initialState: initialState,
  reducers: {
    setTimers(state, action) {
      const { pomodoro, shortBreak, longBreak } = action.payload;
      state.pomodoro = pomodoro * 60;
      state.shortBreak = shortBreak * 60;
      state.longBreak = longBreak * 60;
      state.activeTimer = "pomodoro";
      state.initialTime = pomodoro * 60;
    },
    changeTimer(state, action) {
      const chosenTimer = action.payload;
      state.activeTimer = chosenTimer;

      if (chosenTimer === "pomodoro") state.initialTime = state.pomodoro;
      if (chosenTimer === "short break") state.initialTime = state.shortBreak;
      if (chosenTimer === "long break") state.initialTime = state.longBreak;
    },
  },
});

export const timerActions = timerSlice.actions;
export default timerSlice;
