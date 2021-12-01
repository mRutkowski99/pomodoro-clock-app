import { Input, InputContainer, StyledInputFont } from "./InputFont.styled";

const fonts = ["Kumbh Sans", "Roboto Slab", "Space Mono"];

const InputFont = (props) => {
  const changeFontHandler = (event) => {
    props.onChange({ type: "FONT", payload: fonts[event.target.id] });
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
            active={font === props.value}
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
