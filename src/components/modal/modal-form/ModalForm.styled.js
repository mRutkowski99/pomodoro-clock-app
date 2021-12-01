import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 1rem 2rem 2rem;
  position: relative;

  h3 {
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 1.6rem;
  }

  & > div:not(:last-of-type) {
    border-bottom: solid 1px #999;
  }
`;

export const StyledSubmitButton = styled.button`
  outline: none;
  border: none;
  font-weight: 700;
  font-size: 1.8rem;
  color: #fff;
  background-color: ${(props) => props.theme.color};
  display: inline-block;
  padding: 1rem 3rem;
  border-radius: 100rem;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
`;
