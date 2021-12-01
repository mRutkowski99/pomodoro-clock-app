import { useState } from "react";
import { Input, InputContainer, StyledInputColor } from "./InputColor.styled";

const colors = ["#F87070", "#70F3F8", "#D881F8"];

const InputColor = (props) => {
  const [activeColor, setActiveColor] = useState(0);

  const changeColorHandler = (event) => {
    setActiveColor(+event.target.id);
    props.onChange({ type: "COLOR", payload: colors[activeColor] });
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
            active={idx === activeColor}
            onClick={changeColorHandler}
          />
        ))}
      </InputContainer>
    </StyledInputColor>
  );
};

export default InputColor;
