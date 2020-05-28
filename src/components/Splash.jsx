import React from "react";
import styled from "styled-components";

const StyledSplash = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export function Splash({ children }) {
  return <StyledSplash>{children}</StyledSplash>;
}

export default Splash;
