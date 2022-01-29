import { usePomodoro } from "~/hooks/pomodoro";
import styles from "./App.module.scss";

function App() {
  const { isRunning, time, start, pause, resume } = usePomodoro();

  return (
    <div className={styles.App}>
      <h1>Pomodoro</h1>
      <p>
        {formatTime(time)}
        {!isRunning && ", paused"}
      </p>
      <p>
        <button onClick={start}>start</button>
        <button onClick={pause}>pause</button>
        <button onClick={resume}>resume</button>
      </p>
    </div>
  );
}

function formatTime(time: number) {
  const seconds = Math.floor(time / 1000);
  const minutes = Math.floor(seconds / 60);
  const ss = `${seconds % 60}`.padStart(2, "0");
  const mm = `${minutes}`.padStart(2, "0");
  if (minutes <= 5) {
    return `${mm}:${ss}`;
  }
  return `${mm}`;
}

export default App;
