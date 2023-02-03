import { useContext } from "react";
import Header from "./components/header/Header";
import MainContent from "./components/main/MainContent";
import { ThemeContext } from "./store/ChangeTheme";

import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
