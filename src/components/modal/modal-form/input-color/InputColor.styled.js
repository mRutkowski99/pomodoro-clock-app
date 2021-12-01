import styled from "styled-components";
import check from "../../../../assets/check.png";

export const StyledInputColor = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media screen and (min-width: 700px) {
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
  background-color: ${(props) => props.bg};
  background: ${(props) => props.active && `url(${check})`},
    linear-gradient(0deg, ${(props) => props.bg}, ${(props) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%, 100%;
  cursor: pointer;
`;
//<div>Icons made by <a href="https://www.flaticon.com/authors/bingge-liu" title="Bingge Liu">Bingge Liu</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
