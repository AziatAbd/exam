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

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const themes = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
  );
};
