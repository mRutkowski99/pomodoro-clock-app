import styled from "styled-components";

export const StyledInputFont = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 3rem 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Input = styled.div`
  width: 4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.fontFamily};
  font-weight: 700;
  background-color: ${(props) => (props.active ? "#111" : "#eff1fa")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  transition: all 0.2s;
  cursor: pointer;
`;
