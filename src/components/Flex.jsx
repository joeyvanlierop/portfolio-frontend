import React, { Component } from "react";
import styled from "styled-components";
import { flexbox } from "styled-system";

const StyledFlex = styled.div`
  ${flexbox}
  display: flex;
`;

export class Flex extends Component {
  render() {
    const { children } = this.props;
    return <StyledFlex {...this.props}>{children}</StyledFlex>;
  }
}

Flex.defaultProps = {
  alignItems: "center",
  justifyContent: "center",
};

export default Flex;
