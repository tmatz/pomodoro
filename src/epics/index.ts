import { combineEpics } from "redux-observable";
import type { Action, Epic } from "./common";
import pomodoroEpics from "./pomodoro";

export default combineEpics(pomodoroEpics) as Epic<Action>;
