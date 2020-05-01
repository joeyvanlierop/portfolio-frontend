import React, { Component } from "react";
import styled from "styled-components";

const StyledHeader = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 3rem;
  font-weight: 700;
  padding-right: 1rem;
  font-family: ${(props) => props.theme.fonts.header};
  color: ${(props) => props.theme.colors.text};
`;

export class Header extends Component {
  render() {
    const { children } = this.props;

    return <StyledHeader>{children}</StyledHeader>;
  }
}

export default Header;
