import { StyledForm, StyledSubmitButton } from "./ModalForm.styled";
import InputTime from "./input-time/InputTime";
import InputFont from "./input-font/InputFont";
import InputColor from "./input-color/InputColor";
import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../../../store/themeSlice";
import { timerActions } from "../../../store/timerSlice";

const formReducer = (state, action) => {
  if (action.type === "TIME") {
    return {
      ...state,
      time: action.payload,
    };
  }

  if (action.type === "FONT") {
    return {
      ...state,
      font: action.payload,
    };
  }

  if (action.type === "COLOR") {
    return {
      ...state,
      color: action.payload,
    };
  }

  return state;
};

const ModalForm = () => {
  const dispatch = useDispatch();
  const { font, color } = useSelector((state) => state.theme);
  const { pomodoro, shortBreak, longBreak } = useSelector(
    (state) => state.timer
  );

  //Initial state needs to be created every time from global state to remain values set previously after closing and opening modal
  const initialFormState = {
    time: {
      pomodoro: pomodoro / 60,
      shortBreak: shortBreak / 60,
      longBreak: longBreak / 60,
    },
    font: font,
    color: color,
  };

  const [formState, FormDispatch] = useReducer(formReducer, initialFormState);

  const changeInputHandler = (data) => {
    FormDispatch(data);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const { time, font, color } = formState;

    dispatch(themeActions.setTheme({ font: font, color: color }));
    dispatch(timerActions.setTimers(time));
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <InputTime onChange={changeInputHandler} value={formState.time} />
      <InputFont onChange={changeInputHandler} value={formState.font} />
      <InputColor onChange={changeInputHandler} value={formState.color} />
      <StyledSubmitButton type="submit">Apply</StyledSubmitButton>
    </StyledForm>
  );
};

export default ModalForm;
