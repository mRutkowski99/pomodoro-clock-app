import { Input, InputContainer, StyledInputColor } from "./InputColor.styled";

const colors = ["#F87070", "#70F3F8", "#D881F8"];

const InputColor = (props) => {
  const changeColorHandler = (event) => {
    props.onChange({ type: "COLOR", payload: colors[event.target.id] });
  };

  return (
    <StyledInputColor>
      <h3>Color</h3>
      <InputContainer>
        {colors.map((color, idx) => (
          <Input
            key={idx}
            id={idx}
            bg={color}
            active={color === props.value}
            onClick={changeColorHandler}
          />
        ))}
      </InputContainer>
    </StyledInputColor>
  );
};

export default InputColor;
