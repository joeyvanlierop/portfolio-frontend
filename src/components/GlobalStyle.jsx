import { Global } from "@emotion/core";

export default () => (
  <Global
    styles={(theme) => ({
      html: {
        "line-height": "1.5",
        "scroll-behavior": "smooth",
        "box-sizing": "border-box",
      },

      "html, body": {
        height: "100%",
      },

      "#root": {
        display: "flex",
        "flex-direction": "column",
        "min-height": "100%",
      },

      "*, *:before, *:after": {
        "box-sizing": "inherit",
      },
    })}
  />
);
