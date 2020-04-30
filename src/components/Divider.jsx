import React, { Component } from "react";
import styled from "styled-components";

const DividerWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledDivider = styled.hr`
  margin: 0;
  padding: 0;
  width: 20%;
  border: none;
  border-bottom: 2px dotted #30475e;
`;

export class Divider extends Component {
  render() {
    return (
      <DividerWrapper>
        <StyledDivider className="divider" />
      </DividerWrapper>
    );
  }
}

export default Divider;
