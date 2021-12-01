import StyledThemeButton from "./ThemeButton.styled";

const ThemeButton = (props) => {
  return (
    <StyledThemeButton
      active={props.active}
      onClick={() => {
        props.onClick(props.id);
      }}
    >
      {props.children}
    </StyledThemeButton>
  );
};

export default ThemeButton;
