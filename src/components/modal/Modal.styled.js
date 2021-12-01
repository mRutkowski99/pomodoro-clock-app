import styled, { keyframes } from "styled-components";

const modalAnimation = keyframes`
  0% {
    transform: translateY(-3rem);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModal = styled.div`
  width: min(90%, 80rem);
  background-color: #fff;
  border-radius: 1rem;
  animation: ${modalAnimation} ease-out 0.5s forwards;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem 2rem;
  border-bottom: solid 1px #999;

  button {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  img {
    width: 1.5rem;
  }
`;
