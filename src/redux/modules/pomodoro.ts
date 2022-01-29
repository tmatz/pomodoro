import { createSlice } from "@reduxjs/toolkit";

type State = {
  isRunning: boolean;
  time: number;
};

const initialState: State = { isRunning: false, time: 0 };

export const slice = createSlice({
  name: "pomodoro",
  initialState,
  reducers: {
    start(state) {
      state.isRunning = true;
      state.time = 0;
    },
    pause(state) {
      state.isRunning = false;
    },
    resume(state) {
      state.isRunning = true;
    },
  },
});

export const { start, pause, resume } = slice.actions;
