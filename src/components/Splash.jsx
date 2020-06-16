import React from "react";

export function Splash({ children }) {
  return (
    <section
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {children}
    </section>
  );
}

export default Splash;
