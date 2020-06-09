import React from "react";
import styled from "@emotion/styled";
import { color, space, typography } from "styled-system";

const StyledText = styled.p`
  ${color}
  ${typography}
  ${space}
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
`;

export function Text({ children, ...props }) {
  return <StyledText {...props}>{children}</StyledText>;
}

Text.defaultProps = {
  fontFamily: "body",
  fontSize: "1.5rem",
  fontWeight: "400",
  color: "text",
};

export default Text;
