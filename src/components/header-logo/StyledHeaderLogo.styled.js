import styled from "styled-components";

const StyledHeaderLogo = styled.header`
  position: relative;

  img {
    display: block;
    width: 100%;
  }

  //Invisible h1 for better accesibility (?)
  h1 {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -10;
    color: transparent;
  }
`;

export default StyledHeaderLogo;
