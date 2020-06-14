import React from "react";
import styled from "@emotion/styled";
import { Text } from "theme-ui";
import Badge from "../Badge";
import { Flex } from "theme-ui";

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
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;

  &:not(:first-of-type) {
    margin-left: 0.5rem;
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export function ShowcaseItem({ title, description, badges }) {
  return (
    <StyledShowcaseItem>
      <div>
        <Text
          variant="uppercase"
          sx={{
            fontFamily: "card",
            margin: "0",
            marginBottom: "1.5rem",
          }}
        >
          {title}
        </Text>
        <Text
          sx={{
            fontWeight: 300,
            fontFamily: "card",
            fontSize: "1rem",
            margin: "0",
          }}
        >
          {description}
        </Text>
      </div>
      <Flex sx={{ flexWrap: "wrap", justifyContent: "flex-start" }}>
        {badges.map((text) => (
          <Badge
            sx={{
              marginTop: "0.5rem",
              marginRight: "0.5rem",
            }}
            key={text}
          >
            {text}
          </Badge>
        ))}
      </Flex>
    </StyledShowcaseItem>
  );
}

ShowcaseItem.defaultProps = {
  title: "",
  description: "",
};

export default ShowcaseItem;
