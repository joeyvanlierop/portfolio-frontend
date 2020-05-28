import get from "lodash.get";
import merge from "lodash.merge";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

const STORAGE_KEY = "modeData";

export const ThemeContext = React.createContext();

export function AppTheme({ children }) {
  const [mode, updateMode] = useMode("light");

  function mergeTheme() {
    return merge({}, theme, {
      colors: get(theme.colors.modes, mode, theme.colors),
    });
  }

  function toggle() {
    if (mode === "light") {
      updateMode("dark");
    } else {
      updateMode("light");
    }
  }

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <ThemeProvider theme={mergeTheme(mode)}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

function useMode(defaultMode) {
  const [mode, setMode] = useState(undefined);

  useEffect(() => {
    setMode(loadMode());
  }, []);

  function loadMode() {
    if (typeof window === "undefined") {
      return defaultMode;
    }

    const modes = getModes();
    const savedModeJson = loadSavedMode();
    let savedMode = "";

    try {
      savedMode = JSON.parse(savedModeJson);
    } catch (e) {
      console.log(e);
    }

    console.log(savedMode);

    if (modes.includes(savedMode)) {
      return savedMode;
    } else {
      return modes[0];
    }
  }

  function loadSavedMode() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function getModes() {
    return Object.keys(theme.colors.modes);
  }

  function updateMode(mode) {
    saveMode(mode);
    setMode(mode);
  }

  function saveMode(mode) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mode));
  }

  return [mode, updateMode];
}

export default AppTheme;
