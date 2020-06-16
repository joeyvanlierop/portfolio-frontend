import React from "react";
import { Box } from "theme-ui";

//TODO:
// Make an inverted invariant
// Maybe switch to theme-ui button

export function Button({ href, children, inverted, ...props }) {
  return (
    <Box
      sx={{
        color: inverted ? "background" : "text",
        backgroundColor: inverted ? "text" : "background",
        lineHeight: "1.5",
        textDecoration: "none",
        display: "inline-block",
        borderStyle: "solid",
        borderRadius: "0.25rem",
        userSelect: "none",
        padding: "0.375rem 0.75rem",
        transition: "all 0.15s ease-in-out",
        cursor: "pointer",
        fontFamily: "button",
        fontSize: "1rem",
        fontWeight: "500",
        marginX: "0",
        marginY: "0",
        borderWidth: "1px",
        borderColor: "text",

        ":hover": {
          color: "background",
          backgroundColor: "text",
        },

        ":focus": {
          outline: "none",
        },
      }}
      as="a"
      href={href}
      {...props}
    >
      {children}
    </Box>
  );
}

export default Button;
