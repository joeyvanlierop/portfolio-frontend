import React from "react";
import styled from "@emotion/styled";

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
  border-bottom: 2px dotted ${({ theme }) => theme.colors.text};
`;

export function Divider() {
  return (
    <DividerWrapper>
      <StyledDivider />
    </DividerWrapper>
  );
}

export default Divider;
