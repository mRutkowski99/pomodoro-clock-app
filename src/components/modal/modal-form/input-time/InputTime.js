import { useReducer } from "react";
import InputNumber from "./InputNumber";
import { StyledInputTime, InputContainer } from "./InputTime.styled";

const initialTime = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 10,
};

const timeReducer = (state, action) => {
  if (action.type === "pomodoro") {
    return {
      ...state,
      pomodoro: action.payload * 60,
    };
  }

  if (action.type === "short break") {
    return {
      ...state,
      shortBreak: action.payload * 60,
    };
  }

  if (action.type === "long break") {
    return {
      ...state,
      longBreak: action.payload * 60,
    };
  }

  return state;
};

const InputTime = (props) => {
  const [times, dispatch] = useReducer(timeReducer, initialTime);

  const numberChangeHandler = (data) => {
    dispatch(data);
    props.onChange({ type: "TIME", payload: times });
  };

  return (
    <StyledInputTime>
      <h3>Time (minutes)</h3>
      <InputContainer>
        <InputNumber
          label="pomodoro"
          value={times.pomodoro}
          onChange={numberChangeHandler}
        />
        <InputNumber
          label="short break"
          value={times.shortBreak}
          onChange={numberChangeHandler}
        />
        <InputNumber
          label="long break"
          value={times.longBreak}
          onChange={numberChangeHandler}
        />
      </InputContainer>
    </StyledInputTime>
  );
};

export default InputTime;
