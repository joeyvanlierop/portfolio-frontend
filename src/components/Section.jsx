import React from "react";

export function Section({ children, ...props }) {
  return (
    <section
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        px: "0",
        py: ["8rem", "16rem"],
      }}
      {...props}
    >
      {children}
    </section>
  );
}

export default Section;
