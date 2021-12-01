import StyledTimerButton from "./TimerButton.styled";

const TimerButton = (props) => {
  return (
    <StyledTimerButton
      active={props.active}
      onClick={() => {
        props.onClick(props.id);
      }}
    >
      {props.children}
    </StyledTimerButton>
  );
};

export default TimerButton;
