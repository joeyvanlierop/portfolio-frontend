import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import Button from "./Button";

const Grow = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.85);
  }
  
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const AboutWrapper = styled.div`
  margin: auto 0;
`;

const StyledFooter = styled.section`
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 500;
`;

const StyledButton = styled(Button)`
  font-family: "Montserrat", sans-serif;

  &:not(:first-of-type) {
    margin-left: 1rem;
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const StyledAbout = styled.div`
  border-left: 2px dotted ${({ theme }) => theme.colors.text};
  margin: 0;
  padding: 0 2rem;
  opacity: 1;
  transform: scale(1);
  animation: 1.5s ease-out ${Grow};
`;

export function About({ children, ...props }) {
  return (
    <AboutWrapper {...props}>
      <StyledAbout>{children}</StyledAbout>
    </AboutWrapper>
  );
}

export function AboutFooter({ children, ...props }) {
  return <StyledFooter {...props}>{children}</StyledFooter>;
}

export function AboutButton({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

// About.Footer = ({ children }) => <AboutFooter>{children}</AboutFooter>;

// About.Button = ({ children, ...props }) => (
//   <AboutButton {...props}>{children}</AboutButton>
// );

export default About;
