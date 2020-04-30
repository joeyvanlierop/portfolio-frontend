import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Button from "./Button";

const AboutWrapper = styled.div`
  margin: auto 0;
`;

const AboutHeader = styled.section`
  font-size: 3rem;
  font-weight: 700;
  padding-right: 1rem;
`;

const AboutText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  color: #30475e;
  margin: 3rem 0;
`;

const AboutFooter = styled.section`
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 500;
`;

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

const AboutButton = styled(Button)`
  font-family: "Montserrat", sans-serif;

  &:not(:first-child) {
    margin-left: 1rem;
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const StyledAbout = styled.div`
  color: #222831;
  border-left: 2px dotted #30475e;
  margin: 0;
  padding: 0 2rem;
  animation: 1s ease-out 0s 1 ${Grow};
`;

export class About extends Component {
  render() {
    const { children } = this.props;

    return (
      <AboutWrapper className={"main-column"}>
        <StyledAbout id={"about"}>{children}</StyledAbout>
      </AboutWrapper>
    );
  }
}

About.Header = ({ children }) => <AboutHeader>{children}</AboutHeader>;

About.Body = ({ children }) => <AboutText>{children}</AboutText>;

About.Footer = ({ children }) => <AboutFooter>{children}</AboutFooter>;

About.Button = ({ children, ...props }) => (
  <AboutButton {...props}>{children}</AboutButton>
);

export default About;
