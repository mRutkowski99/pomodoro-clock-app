import settingsLogo from "../assets/icon-settings.svg";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { modalActions } from "../store/modalSlice";

const StyledSettings = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  margin-top: auto;
  cursor: pointer;
`;

const IconSetting = () => {
  const dispatch = useDispatch();

  const showModalHandler = () => {
    dispatch(modalActions.showModal());
  };

  return (
    <StyledSettings onClick={showModalHandler}>
      <img src={settingsLogo} alt="Logo inside settings button" />
    </StyledSettings>
  );
};

export default IconSetting;
