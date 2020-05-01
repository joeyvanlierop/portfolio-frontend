import React, { Component } from "react";
import styled from "styled-components";
import { space } from "styled-system";

const StyledBadge = styled.span`
  ${space}
  color: ${(props) => props.theme.colors.badge};
  background-color: ${(props) => props.theme.colors.gray};
  font-family: ${(props) => props.theme.fonts.badge};
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
