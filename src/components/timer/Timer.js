import {
  StyledTimer,
  Center,
  StyledTimeout,
  StyledTimerBtn,
} from "./Timer.styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";
import useTimer from "../../hooks/useTimer";
import { useEffect } from "react";

const Timer = () => {
  const initialTime = useSelector((state) => state.timer.initialTime);
  const colorTheme = useSelector((state) => state.theme.color);

  const {
    seconds,
    minutes,
    remainingTime,
    finish,
    isRunning,
    setIsRunning,
    resetTimer,
  } = useTimer(initialTime);

  useEffect(resetTimer, [initialTime]);

  let btnText = "start";
  if (isRunning) btnText = "pause";
  if (finish) btnText = "reset";

  const progressbarValue = ((initialTime - remainingTime) / initialTime) * 100;

  const toggleTimerHandler = () => {
    setIsRunning((prev) => !prev);
  };

  return (
    <StyledTimer>
      <CircularProgressbar
        value={progressbarValue}
        strokeWidth={4}
        styles={buildStyles({
          pathTransitionDuration: 1,
          pathColor: colorTheme,
          trailColor: "transparent",
        })}
      />

      <Center>
        <StyledTimeout>
          {minutes}:{seconds}
        </StyledTimeout>
        <StyledTimerBtn coloredText={isRunning} onClick={toggleTimerHandler}>
          {btnText}
        </StyledTimerBtn>
      </Center>
    </StyledTimer>
  );
};

export default Timer;
