import React from "react";
import styled from "@emotion/styled";
import { flexbox } from "styled-system";

const StyledFlex = styled.div`
  ${flexbox}
  display: flex;
`;

export function Flex({ children, ...props }) {
  return <StyledFlex {...props}>{children}</StyledFlex>;
}

Flex.defaultProps = {
  alignItems: "center",
  justifyContent: "center",
};

export default Flex;
