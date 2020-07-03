import React from "react";
import { Box, Flex } from "theme-ui";
import Container from "../Container";
import ShowcaseItem from "./ShowcaseItem";

export function Showcase({ items, theme }) {
  return (
    <Flex sx={{ width: "100%" }}>
      <Box
        sx={{
          position: "relative",
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          flex: "1",

          "::before": {
            content: "''",
            position: "absolute",
            width: "10%",
            height: "100%",
            left: "0",
            top: "0",
            zIndex: "1",
            background: (theme) =>
              `-webkitlinear-gradient(right, transparent, ${theme.colors.background})`,
          },

          "::after": {
            content: "''",
            position: "absolute",
            width: "10%",
            height: "100%",
            right: "0",
            top: "0",
            zIndex: "1",
            background: (theme) =>
              `-webkit-linear-gradient(left, transparent, ${theme.colors.background})`,
          },
        }}
      >
        <Container>
          <Flex
            sx={{
              margin: "auto",
              alignItems: "center",
              transition: "all 0.5s ease-out",

              "& > *": {
                marginRight: "1rem",
              },
            }}
          >
            {items.map((item) => (
              <ShowcaseItem key={item.title} {...item} />
            ))}
          </Flex>
        </Container>
      </Box>
    </Flex>
  );
}

export default Showcase;
