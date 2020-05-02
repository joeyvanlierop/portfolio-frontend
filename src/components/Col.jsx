import React, { Component } from "react";
import styled from "styled-components";

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

export function Col({ children, className }) {
  return <StyledCol className={className}>{children}</StyledCol>;
}

export default Col;
