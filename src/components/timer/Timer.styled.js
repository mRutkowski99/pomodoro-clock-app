import styled from "styled-components";

export const StyledTimer = styled.div`
  position: relative;
  width: min(100%, 38rem);
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1rem;
  background-color: #161932;
  border: solid 1.5rem #1e213f;
  box-shadow: -5rem -5rem 10rem #272c5a;
`;

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledTimeout = styled.span`
  color: #eff1fa;
  font-size: 8rem;
  font-weight: 700;
`;

export const StyledTimerBtn = styled.button`
  display: inline;
  outline: none;
  border: none;
  font: inherit;
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => (props.coloredText ? props.theme.color : "#eff1fa")};
  background-color: transparent;
  text-transform: uppercase;
  letter-spacing: 10px;
  cursor: pointer;
`;
