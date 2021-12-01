import styled from "styled-components";

export const StyledInputTime = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media screen and (min-width: 700px) {
    padding: 3rem 0;
    align-items: flex-start;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 4rem;
  }
`;
