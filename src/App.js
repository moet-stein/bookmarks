import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import { grey } from "@mui/material/colors";
import Home from "./views/Home";

const theme = createTheme({
  typography: {
    fontFamily: "Lato, Arial",
  },
  palette: {
    primary: {
      main: "#ff6900",
    },
    secondary: {
      main: grey[500],
    },
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
