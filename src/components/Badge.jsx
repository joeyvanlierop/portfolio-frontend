import React from "react";
import styled from "@emotion/styled";

const StyledBadge = styled.span`
  color: ${({ theme }) => theme.colors.badge};
  background-color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.badge};
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  padding: 0.25em 0.4em;
  border-radius: 0.25rem;
`;

export function Badge({ children, ...props }) {
  return <StyledBadge {...props}>{children}</StyledBadge>;
}

export default Badge;
