import React from "react";

export function Container({ children }) {
  return (
    <div
      sx={{
        width: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <div
        sx={{
          padding: "0 2rem",
          width: "100%",
          maxWidth: "80rem",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Container;
