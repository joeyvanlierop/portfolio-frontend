import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const StyledBackground = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;

const Fade = keyframes`
  from {
    opacity: 1;
    box-shadow: 0 0 300px 100px rgb(0, 0, 0, 0.5) inset;
  }
  
  to {
    opacity: 0;
    box-shadow: 0 0 0px 0px rgb(0, 0, 0, 0) inset;
  }
`;

const Vignette = styled.div`
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  /* opacity: 0;
  background-color: black; */
  box-shadow: 0 0 0px 0px rgb(0, 0, 0, 0) inset;
  animation: 3s ease-in-out ${Fade};
`;

export class Background extends Component {
  render() {
    const { children } = this.props;

    return (
      <StyledBackground>
        <Vignette />
        {children}
      </StyledBackground>
    );
  }
}

export default Background;
