import React from "react";
import { Text } from "theme-ui";
import Badge from "../Badge";
import { Flex } from "theme-ui";

export function ShowcaseItem({ title, description, badges }) {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: "0",
        flexShrink: "0",
        justifyContent: "space-between",
        flexBasis: ["80vw", "20rem"],
        height: ["80vw", "20rem"],
        padding: "2rem",
        marginY: "1rem",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "text",
        borderRadius: "10px",
      }}
    >
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
    </div>
  );
}

ShowcaseItem.defaultProps = {
  title: "",
  description: "",
};

export default ShowcaseItem;
