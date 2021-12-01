import TimerButton from "./TimerButton";
import StyledTimerSwitcher from "./TimerSwitcher.styled";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { timerActions } from "../../store/timerSlice";

const btnOptions = ["pomodoro", "short break", "long break"];

const TimerSwitcher = () => {
  const dispatch = useDispatch();
  const activeBtn = useSelector((state) => state.timer.activeTimer);

  const changeActiveBtnHandler = (id) => {
    dispatch(timerActions.changeTimer(btnOptions[id]));
  };

  return (
    <StyledTimerSwitcher>
      {btnOptions.map((option, idx) => (
        <TimerButton
          key={idx}
          id={idx}
          active={option === activeBtn}
          onClick={changeActiveBtnHandler}
        >
          {option}
        </TimerButton>
      ))}
    </StyledTimerSwitcher>
  );
};

export default TimerSwitcher;
