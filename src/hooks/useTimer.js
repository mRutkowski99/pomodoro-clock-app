import { useEffect, useState } from "react";

const useTimer = (initialTime) => {
  const [minutes, setMinutes] = useState(Math.floor(initialTime / 60));
  const [seconds, setSeconds] = useState(initialTime % 60);
  const [isRunning, setIsRunning] = useState(false);
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    if (seconds === 0 && minutes === 0) setFinish(true);

    const interval = setInterval(() => {
      if (!isRunning || finish) return;

      seconds === 0 ? setSeconds(59) : setSeconds((prev) => (prev -= 1));
      seconds === 59 && minutes > 0 && setMinutes((prev) => (prev -= 1));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds, minutes, isRunning, finish]);

  const resetTimer = () => {
    setMinutes(Math.floor(initialTime / 60));
    setSeconds(initialTime % 60);
    setIsRunning(false);
    setFinish(false);
  };

  return {
    seconds: String(seconds).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    isRunning,
    setIsRunning,
    finish,
    remainingTime: minutes * 60 + seconds,
    resetTimer,
  };
};

export default useTimer;
