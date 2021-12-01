import styled from "styled-components";

export const StyledInputNuber = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media screen and (min-width: 700px) {
    flex: 1 1 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const Label = styled.span`
  color: #666;
`;

export const Input = styled.div`
  width: 50%;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  background-color: #eff1fa;

  @media screen and (min-width: 700px) {
    width: 100%;
  }
`;

export const Control = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ControlButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
