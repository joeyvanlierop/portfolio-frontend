import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { color, space, typography } from "styled-system";

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
    props.flat ? "none" : `0px 5px 35px -10px ${props.theme.colors.shadow}`};
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

export function Navbar({ children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Determines if the current window is scrolled down
    function onScroll() {
      if (window.pageYOffset > 10) {
        updateScrolled(true);
      } else if (window.pageYOffset <= 10) {
        updateScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);

  // Updates the scrolled state
  function updateScrolled(newScrolled) {
    if (scrolled != newScrolled) {
      setScrolled(newScrolled);
    }
  }

  return <StyledNavbar flat={!scrolled}>{children}</StyledNavbar>;
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
