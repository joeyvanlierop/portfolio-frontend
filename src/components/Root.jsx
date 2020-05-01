import get from "lodash.get";
import merge from "lodash.merge";
import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

const STORAGE_KEY = "modeData";
const ThemeToggleContext = React.createContext();

export class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "",
    };
  }

  componentDidMount() {
    this.initializeMode();
  }

  initializeMode() {
    const modes = this.getModes();
    const savedModeJson = this.loadMode();

    if ([null, undefined].includes(savedModeJson)) {
      this.setMode(modes[0]);
    } else {
      const savedMode = JSON.parse(savedModeJson);
      if (modes.includes(savedMode)) {
        this.setMode(savedMode);
      } else {
        this.setMode(modes[0]);
      }
    }
  }

  setMode(mode) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mode));
    this.setState({
      mode: mode,
    });
  }

  saveMode() {
    localStorage.setItem(STORAGE_KEY, mode);
  }

  loadMode() {
    return localStorage.getItem(STORAGE_KEY);
  }

  getModes() {
    return Object.keys(theme.colors.modes);
  }

  getTheme() {
    const { mode } = this.state;

    return merge({}, theme, {
      colors: get(theme.colors.modes, mode, theme.colors),
    });
  }

  render() {
    const { children } = this.props;
    const { mode } = this.state;
    const theme = this.getTheme(mode);

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }
}

export default Root;
