import React, { Component } from "react";
import styled from "styled-components";
import Badge from "../Badge";
import Flex from "../Flex";
import Text from "../Text";

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
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.text};
  border-radius: 10px;

  &:not(:first-child) {
    margin-left: 0.5rem;
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export class ShowcaseItem extends Component {
  render() {
    const { title, description, badges } = this.props;

    return (
      <StyledShowcaseItem>
        <div>
          <Text
            uppercase
            fontWeight={600}
            fontFamily={"card"}
            margin={"0"}
            marginBottom={"1.5rem"}
          >
            {title}
          </Text>
          <Text
            fontWeight={300}
            fontFamily={"card"}
            fontSize={"1rem"}
            margin={"0"}
          >
            {description}
          </Text>
        </div>
        <Flex flexWrap={"wrap"} justifyContent={"flex-start"}>
          {badges.map((text) => (
            <Badge marginTop={"0.5rem"} marginRight={"0.5rem"} key={text}>
              {text}
            </Badge>
          ))}
        </Flex>
      </StyledShowcaseItem>
    );
  }
}

ShowcaseItem.defaultProps = {
  title: "",
  description: "",
};

export default ShowcaseItem;
