import React from "react";

export function Badge({ children, ...props }) {
  return (
    <span
      sx={{
        color: "badge",
        backgroundColor: "gray",
        fontFamily: "badge",
        fontSize: "75%",
        fontWeight: "700",
        lineHeight: "1",
        padding: "0.25em 0.4em",
        borderRadius: "0.25rem",
      }}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
