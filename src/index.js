import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import smoothscroll from "smoothscroll-polyfill";
import App from "./App";
import AppTheme from "./components/AppTheme";
import "./styles/stylesheet.css";

smoothscroll.polyfill();
ReactDOM.render(
  <AppTheme>
    <App />
  </AppTheme>,
  document.getElementById("root")
);
