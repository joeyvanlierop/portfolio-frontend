import React from "react";

export function Section({ children, ...props }) {
  return (
    <section
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "12rem 0",
      }}
      {...props}
    >
      {children}
    </section>
  );
}

export default Section;
