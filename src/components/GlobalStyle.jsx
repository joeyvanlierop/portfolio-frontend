import { css, Global } from "@emotion/core";
import React from "react";

function GlobalStyle() {
  return (
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }
      `}
    />
  );
}

export default GlobalStyle;
