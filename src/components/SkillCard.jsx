import React from "react";
import styled from "@emotion/styled";
import { Text } from "theme-ui";

const StyledSkillCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
`;

export function SkillCard({ title, points }) {
  return (
    <StyledSkillCard>
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
    </StyledSkillCard>
  );
}

export default SkillCard;
