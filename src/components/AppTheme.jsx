import React from "react";
import { ThemeProvider, useColorMode } from "theme-ui";
import theme from "../theme";

export const ThemeContext = React.createContext();

function ThemeToggle({ children }) {
  const [colorMode, setColorMode] = useColorMode();

  function toggle() {
    if (colorMode === "light") {
      setColorMode("dark");
    } else {
      setColorMode("light");
    }
  }

  return (
    <ThemeContext.Provider value={{ toggle, colorMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

function AppTheme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <ThemeToggle>{children}</ThemeToggle>
    </ThemeProvider>
  );
}

export default AppTheme;
