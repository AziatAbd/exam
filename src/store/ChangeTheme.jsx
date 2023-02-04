import { useCallback } from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const changeToDarkTheme = useCallback(() => {
    setTheme("#222");
  }, []);

  const changeToLightTheme = useCallback(() => {
    setTheme("#fff");
  }, []);

  const themes = {
    theme,
    changeToDarkTheme,
    changeToLightTheme,
  };

  return (
    <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
  );
};
