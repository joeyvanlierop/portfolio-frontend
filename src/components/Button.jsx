import React, { Component } from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  font-size: ${(props) => {
    return props.fontSize || "1rem";
  }};
  font-weight: ${(props) => {
    return props.fontWeight || "500";
  }};
  font-family: Karla, sans-serif;
  line-height: 1.5;
  text-decoration: none;
  display: inline-block;
  color: #343a40;
  background-color: transparent;
  border: ${(props) => props.borderSize || "1px"} solid;
  border-color: #343a40;
  border-radius: 0.25rem;
  cursor: pointer;
  user-select: none;
  padding: 0.375rem 0.75rem;
  margin: ${(props) => props.marginY || "0"} ${(props) => props.marginX || "0"};
  transition: all 0.15s ease-in-out;

  &:hover {
    color: white;
    background-color: #343a40;
  }

  &:focus {
    outline: none;
  }
`;

export class Button extends Component {
  render() {
    const { href, className, children, submit } = this.props;

    return (
      <StyledButton
        as={submit ? "button" : ""}
        href={href}
        className={className}
        {...this.props}
      >
        {children}
      </StyledButton>
    );
  }
}

export default Button;
