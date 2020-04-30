import React, { Component } from "react";
import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export class Row extends Component {
  render() {
    const { className, children } = this.props;
    return <StyledRow className={className}>{children}</StyledRow>;
  }
}

export default Row;
