import React, { memo, useContext } from "react";
import { ThemeContext } from "../../store/ChangeTheme";
import Button from "../UI/button/Button";

const Header = () => {
  const themes = useContext(ThemeContext);

  console.log(themes.toggleTheme);

  return (
    <>
      <Button onClick={themes.lightTheme}>light</Button>
      <Button onClick={themes.darkTheme}>dark</Button>
    </>
  );
};

export default memo(Header);
