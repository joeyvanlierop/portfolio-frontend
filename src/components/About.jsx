import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Button from "./Button";

const AboutWrapper = styled.div`
  margin: auto 0;
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
  border-left: 2px dotted ${(props) => props.theme.colors.text};
  margin: 0;
  padding: 0 2rem;
  opacity: 1;
  transform: scale(1);
  animation: 2s ease-out 0s 1 ${Grow};
`;

export class About extends Component {
  render() {
    const { className, children } = this.props;

    return (
      <AboutWrapper className={className}>
        <StyledAbout id={"about"}>{children}</StyledAbout>
      </AboutWrapper>
    );
  }
}

About.Footer = ({ children }) => <AboutFooter>{children}</AboutFooter>;

About.Button = ({ children, ...props }) => (
  <AboutButton {...props}>{children}</AboutButton>
);

export default About;
