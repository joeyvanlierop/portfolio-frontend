import React from "react";
import styled from "@emotion/styled";

const StyledHeader = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 3rem;
  font-weight: 700;
  padding-right: 1rem;
  font-family: ${({ theme }) => theme.fonts.header};
  color: ${({ theme }) => theme.colors.text};
`;

export function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

export default Header;
