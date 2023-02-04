import React, { memo, useContext } from "react";
import { ThemeContext } from "../../store/ChangeTheme";
import Button from "../UI/button/Button";

const Header = () => {
  const themes = useContext(ThemeContext);

  return (
    <>
      <Button onClick={themes.changeToLightTheme}>light</Button>
      <Button onClick={themes.changeToDarkTheme}>dark</Button>
    </>
  );
};

export default memo(Header);
