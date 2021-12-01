import styled from "styled-components";

const StyledTimerButton = styled.button`
  outline: none;
  border: none;
  font: inherit;
  font-size: 1.3rem;
  font-weight: 700;
  flex: 1 1 0;
  padding: 1.5rem 1rem;
  border-radius: 100rem;
  color: #eff1fa;
  background-color: ${(props) =>
    props.active ? props.theme.color : "transparent"};
  cursor: pointer;
  transition: all 0.2s;
`;

export default StyledTimerButton;
