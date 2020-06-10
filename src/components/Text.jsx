/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import { color, space, typography } from "styled-system";

const TextStyles = css`
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
`;

export function Text({ children, ...props }) {
  return (
    <text css={TextStyles} {...props}>
      {children}
    </text>
  );
}

Text.defaultProps = {
  fontFamily: "body",
  fontSize: "1.5rem",
  fontWeight: "400",
  color: "text",
};

export default Text;
