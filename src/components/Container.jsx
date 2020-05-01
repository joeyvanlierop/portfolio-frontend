import React, { Component } from "react";
import styled from "styled-components";

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

export class Container extends Component {
  render() {
    const { className, children } = this.props;

    return (
      <ContainerWrapper className={className}>
        <StyledContainer>{children}</StyledContainer>
      </ContainerWrapper>
    );
  }
}

export default Container;
