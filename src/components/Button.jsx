import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.a`
  line-height: 1.5;
  text-decoration: none;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
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
  }

  &:focus {
    outline: none;
  }
`;

export function Button({ href, submit, children, ...props }) {
  return (
    <StyledButton
      sx={{
        fontFamily: "button",
        fontSize: "1rem",
        fontWeight: "500",
        marginX: "0",
        marginY: "0",
        borderWidth: "1px",
        borderColor: "text",
      }}
      as={submit ? "button" : ""}
      href={href}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
