import { useState } from "react";
import { Input, InputContainer, StyledInputFont } from "./InputFont.styled";

const fonts = ["Kumbh Sans", "Roboto Slab", "Space Mono"];

const InputFont = (props) => {
  const [activeFont, setActiveFont] = useState(0);

  const changeFontHandler = (event) => {
    setActiveFont(+event.target.id);
    props.onChange({ type: "FONT", payload: fonts[activeFont] });
  };

  return (
    <StyledInputFont>
      <h3>Font</h3>
      <InputContainer>
        {fonts.map((font, idx) => (
          <Input
            key={idx}
            id={idx}
            fontFamily={font}
            active={idx === activeFont ? true : false}
            onClick={changeFontHandler}
          >
            Aa
          </Input>
        ))}
      </InputContainer>
    </StyledInputFont>
  );
};

export default InputFont;
