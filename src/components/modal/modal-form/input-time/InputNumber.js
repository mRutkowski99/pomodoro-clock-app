import arrowUp from "../../../../assets/icon-arrow-up.svg";
import arrowDown from "../../../../assets/icon-arrow-down.svg";
import {
  StyledInputNuber,
  Label,
  Input,
  Control,
  ControlButton,
} from "./InputNumber.styled";

const InputNumber = ({ value, label, onChange }) => {
  const increaseHandler = (event) => {
    event.preventDefault();
    if (value === 100) return;

    const newVal = (value += 5);
    onChange({ type: label, payload: newVal });
  };

  const decreaseHandler = (event) => {
    event.preventDefault();
    if (value === 5) return;

    const newVal = (value -= 5);
    onChange({ type: label, payload: newVal });
  };

  return (
    <StyledInputNuber>
      <Label>{label}</Label>
      <Input>
        <span>{value}</span>
        <Control>
          <ControlButton onClick={increaseHandler}>
            <img src={arrowUp} alt="Icon arrow up inside button" />
          </ControlButton>
          <ControlButton onClick={decreaseHandler}>
            <img src={arrowDown} alt="Icon arrow down inside button" />
          </ControlButton>
        </Control>
      </Input>
    </StyledInputNuber>
  );
};

export default InputNumber;
