import React from "react";
import styled from "@emotion/styled";

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export function Row({ className, children }) {
  return <StyledRow className={className}>{children}</StyledRow>;
}

export default Row;
