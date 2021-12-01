import GlobalStyle from "./globalStyle";
import HeaderLogo from "./components/header-logo/HeaderLogo";
import ThemeSwitcher from "./components/theme-switcher/ThemeSwitcher";
import Timer from "./components/timer/Timer";
import IconSetting from "./components/IconSettings";
import Overlay from "./components/modal/Modal";

function App() {
  return (
    <>
      <GlobalStyle />
      <Overlay />
      <HeaderLogo />
      <ThemeSwitcher />
      <Timer />
      <IconSetting />
    </>
  );
}

export default App;
