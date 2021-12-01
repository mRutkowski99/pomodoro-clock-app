import {
  StyledTimer,
  Center,
  StyledTimeout,
  StyledTimerBtn,
} from "./Timer.styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Timer = () => {
  const value = 66;

  return (
    <StyledTimer>
      <CircularProgressbar
        value={value}
        strokeWidth={4}
        styles={buildStyles({
          pathTransitionDuration: 1,
          pathColor: "red",
          trailColor: "transparent",
        })}
      />

      <Center>
        <StyledTimeout>15:00</StyledTimeout>
        <StyledTimerBtn>start</StyledTimerBtn>
      </Center>
    </StyledTimer>
  );
};

export default Timer;
