import React, { useContext } from "react";
import { ThemeContext } from "../../store/ChangeTheme";
import Button from "../UI/button/Button";

const Header = () => {
  const themes = useContext(ThemeContext);

  console.log(themes.toggleTheme);

  return (
    <>
      <Button onClick={themes.toggleTheme}>light</Button>
      <Button onClick={themes.toggleTheme}>dark</Button>
    </>
  );
};

export default Header;
