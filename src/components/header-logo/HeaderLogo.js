import logo from "../../assets/logo.svg";
import StyledHeaderLogo from "./StyledHeaderLogo.styled";

const HeaderLogo = () => {
  return (
    <StyledHeaderLogo>
      <h1>Pomodoro</h1>
      <img src={logo} alt="Pomodoro app logo" />
    </StyledHeaderLogo>
  );
};

export default HeaderLogo;
