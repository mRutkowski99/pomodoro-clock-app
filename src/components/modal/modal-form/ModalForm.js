import { StyledForm, StyledSubmitButton } from "./ModalForm.styled";
import InputTime from "./input-time/InputTime";
import InputFont from "./input-font/InputFont";
import InputColor from "./input-color/InputColor";
import { useReducer } from "react";

const initialFormState = {
  time: {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 10,
  },
  font: "Kumbh Sans",
  color: "#F87070",
};

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
  const [formState, FormDispatch] = useReducer(formReducer, {});

  console.log(formState);

  const changeInputHandler = (data) => {
    FormDispatch(data);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <InputTime onChange={changeInputHandler} />
      <InputFont onChange={changeInputHandler} />
      <InputColor onChange={changeInputHandler} />
      <StyledSubmitButton type="submit">Apply</StyledSubmitButton>
    </StyledForm>
  );
};

export default ModalForm;
