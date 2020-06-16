import React from "react";

export function Divider() {
  return (
    <div
      sx={{
        margin: "0",
        padding: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <hr
        sx={{
          margin: "0",
          padding: "0",
          width: "20%",
          border: "none",
          borderBottom: "2px dotted",
          borderColor: "text",
        }}
      />
    </div>
  );
}

export default Divider;
