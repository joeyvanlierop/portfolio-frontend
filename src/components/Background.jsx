import React from "react";
import styled from "@emotion/styled";

const StyledBackground = styled.div`
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100%;
  flex: 1;
`;

export function Background({ children }) {
  return <StyledBackground>{children}</StyledBackground>;
}

export default Background;
