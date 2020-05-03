import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 12rem 0;
`;

export function Section({ children, ...props }) {
  return <StyledSection {...props}>{children}</StyledSection>;
}

export default Section;
