import React, { Component } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SectionHeader = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 3rem;
  font-weight: 700;
  padding-right: 1rem;
  margin-bottom: 1rem;
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

Section.Header = ({ children }) => (
  <SectionHeader className="main-column">{children}</SectionHeader>
);

export default Section;
