import React, { Component } from "react";
import styled from "styled-components";

const StyledBadge = styled.span`
  color: white;
  background-color: #6c757d;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  border-radius: 0.25rem;
`;

export class Badge extends Component {
  render() {
    const { className, children } = this.props;

    return <StyledBadge className={className}>{children}</StyledBadge>;
  }
}

export default Badge;
