import { useCallback } from "react";
import { useAppDispatch, useRootSelector } from "~/hooks/store";
import * as pomodoro from "~/redux/modules/pomodoro";

export function usePomodoro() {
  const dispatch = useAppDispatch();
  const isRunning = useRootSelector((state) => state.pomodoro.isRunning);
  const time = useRootSelector((state) => state.pomodoro.time);
  const start = useCallback(() => dispatch(pomodoro.start()), []);
  const pause = useCallback(() => dispatch(pomodoro.pause()), []);
  const resume = useCallback(() => dispatch(pomodoro.resume()), []);
  return { isRunning, time, start, pause, resume };
}
