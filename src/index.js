import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Root from "./components/Root";
import "./styles/stylesheet.css";

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById("root")
);
