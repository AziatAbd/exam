import { useContext } from "react";
import Header from "./components/header/Header";
import MainContent from "./components/main/MainContent";
import { ThemeContext } from "./store/ChangeTheme";

import "./App.css";
import styled from "styled-components";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <Container bg={theme}>
      <Header />
      <MainContent />
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.bg === "#222" && "#fff"};
  width: 100%;
  height: 700px;
  text-align: center;
`;
