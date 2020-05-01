import React, { Component } from "react";
import styled from "styled-components";

const StyledBackground = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;

export class Background extends Component {
  render() {
    const { children } = this.props;

    return <StyledBackground>{children}</StyledBackground>;
  }
}

export default Background;
