import React, { Component } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 12rem 0;
`;

export class Section extends Component {
  render() {
    const { id, className, children } = this.props;

    return (
      <StyledSection id={id} className={className}>
        {children}
      </StyledSection>
    );
  }
}

export default Section;
