import React from "react";
import { Text } from "theme-ui";

export function SkillCard({ title, points }) {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2rem",
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
            marginBottom: "1rem",
          }}
        >
          {title}
        </Text>
        <ul>
          {points.map((text) => (
            <li key={text}>
              <Text
                sx={{
                  fontWeight: 300,
                  fontFamily: "card",
                  fontSize: "1rem",
                  margin: "0",
                }}
              >
                {text}
              </Text>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillCard;
