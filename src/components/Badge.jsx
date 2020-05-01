import React, { Component } from "react";
import styled from "styled-components";
import { space } from "styled-system";

const StyledBadge = styled.span`
  ${space}
  color: ${(props) => props.theme.colors.badge};
  background-color: ${(props) => props.theme.colors.gray};
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  border-radius: 0.25rem;
`;

export class Badge extends Component {
  render() {
    const { className, children } = this.props;

    return (
      <StyledBadge className={className} {...this.props}>
        {children}
      </StyledBadge>
    );
  }
}

export default Badge;
