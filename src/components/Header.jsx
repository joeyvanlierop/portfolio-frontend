import React from "react";

export function Header({ children }) {
  return (
    <section
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        fontSize: "3rem",
        fontWeight: "700",
        paddingRight: "1rem",
        fontFamily: "header",
        color: "text",
      }}
    >
      {children}
    </section>
  );
}

export default Header;
