import { css, Global } from "@emotion/core";
import React from "react";

function GlobalStyle() {
  return (
    <Global
      styles={css`
        html {
          line-height: 1.5;
          scroll-behavior: smooth;
        }

        html,
        body {
          height: 100%;
        }

        #root {
          display: flex;
          flex-direction: column;
          min-height: 100%;
        }
      `}
    />
  );
}

export default GlobalStyle;
