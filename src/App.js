import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyle";
import HeaderLogo from "./components/header-logo/HeaderLogo";
import ThemeSwitcher from "./components/theme-switcher/ThemeSwitcher";
import Timer from "./components/timer/Timer";
import IconSetting from "./components/IconSettings";
import Overlay from "./components/modal/Modal";

import { useSelector } from "react-redux";

function App() {
  const showModal = useSelector((state) => state.modal.isShown);
  const { font, color } = useSelector((state) => state.theme);

  const theme = {
    font: font,
    color: color,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {showModal && <Overlay />}
      <HeaderLogo />
      <ThemeSwitcher />
      <Timer />
      <IconSetting />
    </ThemeProvider>
  );
}

export default App;
