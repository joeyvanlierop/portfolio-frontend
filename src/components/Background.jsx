import React from "react";
import styled, { keyframes } from "styled-components";

const StyledBackground = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;

const Fade = keyframes`
  from {
    box-shadow: 0 0 300px 50px rgba(0, 0, 0, 0.5) inset;
  }
  
  to {
    box-shadow: 0 0 0px 0px rgba(0, 0, 0, 0) inset;
  }
`;

const Vignette = styled.div`
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  box-shadow: 0 0 0px 0px rgb(0, 0, 0, 0) inset;
  animation: 1.5s ease-in-out ${Fade};
`;

export function Background({ children }) {
  return (
    <StyledBackground>
      <Vignette />
      {children}
    </StyledBackground>
  );
}

export default Background;
