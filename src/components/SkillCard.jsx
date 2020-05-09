import React from "react";
import styled from "styled-components";
import Col from "./Col";
import Text from "./Text";

const StyledSkillCard = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  margin: 0.5rem 0;
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

export function SkillCard({ title, points }) {
  return (
    <StyledSkillCard>
      <div>
        <Text
          uppercase
          fontWeight={600}
          fontFamily={"card"}
          margin={"0"}
          marginBottom={"1rem"}
        >
          {title}
        </Text>
        <ul>
          {points.map((text) => (
            <li key={text}>
              <Text
                fontWeight={300}
                fontFamily={"card"}
                fontSize={"1rem"}
                margin={"0"}
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
