import React, { Component } from "react";
import styled from "styled-components";
import { color, typography, space } from "styled-system";

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
  z-index: 999;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.flat ? "none" : "0px 5px 35px -10px rgba(0, 0, 0, 0.5)"};
  background-color: ${(props) =>
    props.flat ? "transparent" : props.theme.colors.background};
`;

const StyledLink = styled.a`
  ${color}
  ${typography}
  ${space}
  text-decoration: none;
  text-transform: uppercase;
  opacity: 0.5;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`;

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.handleScroll();
    });
  }

  // Determines if the current window is scrolled down
  handleScroll() {
    const { isScrolled } = this.state;

    if (window.pageYOffset > 10 && !isScrolled) {
      this.setScrolled(true);
    } else if (window.pageYOffset <= 10 && isScrolled) {
      this.setScrolled(false);
    }
  }

  // Updates the scrolled state
  setScrolled(scrolled) {
    const { isScrolled } = this.state;

    if (isScrolled != scrolled) {
      this.setState({
        isScrolled: scrolled,
      });
    }
  }

  render() {
    const { isScrolled } = this.state;

    return (
      <StyledNavbar flat={!isScrolled}>{this.props.children}</StyledNavbar>
    );
  }
}

Navbar.Link = ({ href, children, ...props }) => (
  <StyledLink href={href} {...props}>
    {children}
  </StyledLink>
);

Navbar.Link.defaultProps = {
  color: "text",
  fontFamily: "navbar",
  fontSize: "1.25rem",
  fontWeight: "700",
  marginX: "2rem",
  marginY: "0",
  padding: "2rem",
};

export default Navbar;
