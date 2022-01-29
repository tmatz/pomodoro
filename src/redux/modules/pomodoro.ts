import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    setTime(state, { payload }: PayloadAction<number>) {
      state.time = payload;
    },
  },
});

export const { start, pause, resume, setTime } = slice.actions;
