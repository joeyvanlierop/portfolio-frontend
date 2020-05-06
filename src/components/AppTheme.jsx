import get from "lodash.get";
import merge from "lodash.merge";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

const STORAGE_KEY = "modeData";

export const ThemeContext = React.createContext();

export function AppTheme({ children }) {
  const [mode, setMode] = useState(initializeMode());

  function initializeMode() {
    const modes = getModes();
    const savedModeJson = loadMode();
    let savedMode = "";

    try {
      savedMode = JSON.parse(savedModeJson);
    } catch (e) {
      console.log(e);
    }

    if (modes.includes(savedMode)) {
      return savedMode;
    } else {
      return modes[0];
    }
  }

  function updateMode(mode) {
    saveMode(mode);
    setMode(mode);
  }

  function saveMode(mode) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mode));
  }

  function loadMode() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function getModes() {
    return Object.keys(theme.colors.modes);
  }

  function getTheme() {
    return merge({}, theme, {
      colors: get(theme.colors.modes, mode, theme.colors),
    });
  }

  function toggle() {
    if (mode == "light") {
      updateMode("dark");
    } else {
      updateMode("light");
    }
  }

  return (
    <ThemeContext.Provider value={toggle}>
      <ThemeProvider theme={getTheme(mode)}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default AppTheme;
