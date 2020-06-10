import React from "react";
import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 50px;
`;

export function Footer({ children }) {
  return <StyledFooter>{children}</StyledFooter>;
}

export default Footer;
