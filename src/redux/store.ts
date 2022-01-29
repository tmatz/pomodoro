import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import epics from "~/epics";
import * as pomodoro from "./modules/pomodoro";

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: {
    pomodoro: pomodoro.slice.reducer,
  },
  middleware: (getDefaultMiddlewares) => [
    ...getDefaultMiddlewares({}),
    epicMiddleware,
  ],
});

epicMiddleware.run(epics);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
