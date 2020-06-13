/** @jsx jsx */
import styled from "@emotion/styled";
import { jsx, Text } from "theme-ui";
import Col from "./Col";

const StyledSkillCard = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  margin: 0.5rem 0;
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
