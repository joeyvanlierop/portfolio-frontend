import { css, Global } from "@emotion/core";
import React from "react";

function GlobalStyle() {
  return (
    <Global
      styles={css`
        html {
          line-height: 1.5;
          scroll-behavior: smooth;
          box-sizing: border-box;
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

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
      `}
    />
  );
}

export default GlobalStyle;
