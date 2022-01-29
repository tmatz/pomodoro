import { configureStore } from "@reduxjs/toolkit";
import * as pomodoro from "./modules/pomodoro";

export const store = configureStore({
  reducer: {
    pomodoro: pomodoro.slice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
