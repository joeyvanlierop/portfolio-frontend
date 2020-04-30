import React, { Component } from "react";
import styled from "styled-components";
import Col from "./Col";

const StyledSkillCard = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  margin: 0.5rem 0;
  border: 2px black solid;
  border-radius: 10px;

  &:not(:first-child) {
    margin-left: 0.5rem;
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const SkillCardHeader = styled.div``;

const SkillCardTitle = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const SkillCardPoints = styled.ul``;

const SkillCardPoint = styled.li``;

export class SkillCard extends Component {
  render() {
    const { title, points } = this.props;

    return (
      <StyledSkillCard>
        <SkillCardHeader>
          <SkillCardTitle>{title}</SkillCardTitle>
          <SkillCardPoints>
            {points.map((text) => (
              <SkillCardPoint key={text}>{text}</SkillCardPoint>
            ))}
          </SkillCardPoints>
        </SkillCardHeader>
      </StyledSkillCard>
    );
  }
}

export default SkillCard;
