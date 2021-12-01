import { useState } from "react";
import ThemeButton from "./ThemeButton";
import StyledThemeSwitcher from "./ThemeSwitcher.styled";

const btnOptions = ["pomodoro", "short break", "long break"];

const ThemeSwitcher = () => {
  const [activeBtn, setActiveBtn] = useState(0);

  const changeActiveBtnHandler = (id) => {
    setActiveBtn(id);
  };

  return (
    <StyledThemeSwitcher>
      {btnOptions.map((option, idx) => (
        <ThemeButton
          key={idx}
          id={idx}
          active={idx === activeBtn}
          onClick={changeActiveBtnHandler}
        >
          {option}
        </ThemeButton>
      ))}
    </StyledThemeSwitcher>
  );
};

export default ThemeSwitcher;
