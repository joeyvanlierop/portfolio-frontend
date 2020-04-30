import React, { Component } from "react";
import styled from "styled-components";
import Badge from "../Badge";

const StyledShowcaseItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 20rem;
  justify-content: space-between;
  height: 20rem;
  padding: 2rem;
  margin: 1rem 0;
  border: 2px black solid;
  border-radius: 10px;

  &:not(:first-child) {
    margin-left: 0.5rem;
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const ShowcaseItemHeader = styled.div``;

const ShowcaseItemTitle = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.5rem;
  margin-top: 0;
`;

const ShowcaseItemDescription = styled.p`
  margin-top: 0;
`;

const ShowcaseItemBadges = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ShowcaseItemBadge = styled(Badge)`
  margin-top: 0.5rem;
  margin-right: 0.5rem;
`;

export class ShowcaseItem extends Component {
  render() {
    const { title, description, badges } = this.props;

    return (
      <StyledShowcaseItem>
        <ShowcaseItemHeader>
          <ShowcaseItemTitle>{title}</ShowcaseItemTitle>
          <ShowcaseItemDescription>{description}</ShowcaseItemDescription>
        </ShowcaseItemHeader>
        <ShowcaseItemBadges>
          {badges.map((text) => (
            <ShowcaseItemBadge key={text}>{text}</ShowcaseItemBadge>
          ))}
        </ShowcaseItemBadges>
      </StyledShowcaseItem>
    );
  }
}

ShowcaseItem.defaultProps = {
  title: "",
  description: "",
};

export default ShowcaseItem;
