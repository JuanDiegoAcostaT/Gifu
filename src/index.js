import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { ThemeProvider } from "emotion-theming";
import { theme } from "./styles/index.js";

ReactDOM.render(
  <ThemeProvider theme={theme} >
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);
