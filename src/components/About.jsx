import { keyframes } from "@emotion/core";
import React from "react";
import Button from "./Button";

const Grow = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.85);
  }
  
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export function About({ children, ...props }) {
  return (
    <div sx={{ margin: "auto 0" }} {...props}>
      <div
        sx={{
          borderColor: "text",
          borderLeft: "2px dotted",
          margin: "0",
          padding: "0 2rem",
          opacity: "1",
          transform: "scale(1)",
          animation: `1.5s ease-out ${Grow}`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function AboutFooter({ children, ...props }) {
  return (
    <section
      sx={{
        fontFamily: "Montserrat, sans-serif",
        fontSize: "1rem",
        fontWeight: "500",
      }}
      {...props}
    >
      {children}
    </section>
  );
}

export function AboutButton({ children, ...props }) {
  return (
    <Button
      sx={{
        fontFamily: "Montserrat, sans-serif",
        marginRight: "2rem",
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
export default About;
