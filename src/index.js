import "normalize.css";
import React from "react";
import { hydrate, render } from "react-dom";
import smoothscroll from "smoothscroll-polyfill";
import App from "./components/App";
import AppTheme from "./components/AppTheme";
import "./styles/stylesheet.css";

smoothscroll.polyfill();
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <AppTheme>
      <App />
    </AppTheme>,
    rootElement
  );
} else {
  render(
    <AppTheme>
      <App />
    </AppTheme>,
    rootElement
  );
}
