import { distinctUntilChanged, EMPTY, interval, map, switchMap } from "rxjs";
import { Action, Epic, RootState } from "~/epics/common";
import { setTime } from "~/redux/modules/pomodoro";

const getSeconds = (timeMs: number) => Math.floor(timeMs / 1000);

const epic: Epic<Action, Action, RootState> = (action$, state$) => {
  // カウントを開始・停止するタイミングを得る
  const pomodoro$ = state$.pipe(
    map((state) => state.pomodoro),
    distinctUntilChanged(
      (pomodoro1, pomodoro2) => pomodoro1.isRunning === pomodoro2.isRunning
    )
  );
  // カウントを開始したら経過時間を生成し続ける
  const time$ = pomodoro$.pipe(
    switchMap((pomodoro) => {
      if (!pomodoro.isRunning) return EMPTY;
      const startTime = Date.now() - pomodoro.time;
      return interval(200).pipe(map((_) => Date.now() - startTime));
    }),
    distinctUntilChanged(
      (time1, time2) => getSeconds(time1) === getSeconds(time2)
    )
  );
  // 経過時間を更新する
  return time$.pipe(map((time) => setTime(time)));
};

export default epic;
