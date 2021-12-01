import settingsLogo from "../assets/icon-settings.svg";
import styled from "styled-components";

const StyledSettings = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  margin-top: auto;
  cursor: pointer;
`;

const IconSetting = () => {
  return (
    <StyledSettings>
      <img src={settingsLogo} alt="Logo inside settings button" />
    </StyledSettings>
  );
};

export default IconSetting;
