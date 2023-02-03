import { useCallback } from "react";
import { createContext, useState } from "react";

// const themes = {
//   light: {
//     background: " #fff",
//   },
//   dark: {
//     background: " #222222",
//     color: "#fff",
//   },
// };

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const darkTheme = useCallback(() => {
    setTheme("dark");
  }, []);
  const lightTheme = useCallback(() => {
    setTheme("light");
  }, []);

  const themes = {
    theme,
    darkTheme,
    lightTheme,
  };

  return (
    <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
  );
};
