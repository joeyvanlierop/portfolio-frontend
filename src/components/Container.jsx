import React from "react";
import styled from "@emotion/styled";

const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const StyledContainer = styled.div`
  padding: 0 2rem;
  width: 100%;
  max-width: 80rem;
`;

export function Container({ children }) {
  return (
    <ContainerWrapper>
      <StyledContainer>{children}</StyledContainer>
    </ContainerWrapper>
  );
}

export default Container;
