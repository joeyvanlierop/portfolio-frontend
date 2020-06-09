import React from "react";
import styled from "@emotion/styled";
import { border, color, space, typography } from "styled-system";

const StyledButton = styled.a`
  ${color}
  ${typography}
  ${space}
  ${border}
  
  line-height: 1.5;
  text-decoration: none;
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  border-style: solid;
  border-radius: 0.25rem;
  user-select: none;
  padding: 0.375rem 0.75rem;
  transition: all 0.15s ease-in-out;
  cursor: pointer;

  ${({ inverted, ...props }) =>
    inverted &&
    `
    color: ${props.theme.colors.background};
    background-color: ${props.theme.colors.text};
  `};

  &:hover {
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.text};
  };

  &:focus {
    outline: none;
  };
`;

export function Button({ href, submit, children, ...props }) {
  return (
    <StyledButton as={submit ? "button" : ""} href={href} {...props}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  fontFamily: "button",
  fontSize: "1rem",
  fontWeight: "500",
  marginX: "0",
  marginY: "0",
  borderWidth: "1px",
  borderColor: "text",
  color: "text",
};

export default Button;
