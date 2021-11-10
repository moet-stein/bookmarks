import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import Home from "./views/Home";

const theme = createTheme({
  typography: {
    fontFamily: "Lato, Arial",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Home />
    </ThemeProvider>
  );
};

export default App;
