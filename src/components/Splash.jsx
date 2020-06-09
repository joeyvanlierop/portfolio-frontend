import React from "react";
import styled from "@emotion/styled";

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
