import React, { Component, Fragment } from "react";
import styled from "styled-components";
import ShowcaseItem from "./ShowcaseItem";
import Container from "../Container";
import Row from "../Row";

const ShowcaseButton = styled.button`
  padding: 0 2rem;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`;

const ShowcaseButtonIcon = styled.span`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.text};
`;

const ShowcaseWrapper = styled.div`
  position: relative;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex: 1;

  &:before {
    content: "";
    position: absolute;
    width: 10%;
    height: 100%;
    left: 0;
    top: 0;
    background: -webkit-linear-gradient(
      right,
      transparent,
      ${(props) => props.theme.colors.background}
    );
    background: linear-gradient(
      right,
      transparent,
      ${(props) => props.theme.colors.background}
    );
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    width: 10%;
    height: 100%;
    right: 0;
    top: 0;
    background: -webkit-linear-gradient(
      left,
      transparent,
      ${(props) => props.theme.colors.background}
    );
    background: linear-gradient(
      left,
      transparent,
      ${(props) => props.theme.colors.background}
    );
    z-index: 1;
  }
`;

const StyledShowcase = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.5s ease-out;
  transform: translateX(${(props) => props.offset}px);
`;

export class Showcase extends Component {
  constructor(props) {
    super(props);

    this.addOffset = this.addOffset.bind(this);
    this.stopScroll = this.stopScroll.bind(this);
    this.timer = null;

    this.state = {
      offset: 0,
    };
  }

  addOffset(amount) {
    const { offset } = this.state;

    this.setState({
      offset: Math.min(offset + amount, 0),
    });
    this.timer = setTimeout(this.addOffset, 10, amount);
  }

  stopScroll() {
    clearTimeout(this.timer);
  }

  render() {
    const { offset } = this.state;
    const { items } = this.props;

    return (
      <Row>
        <ShowcaseButton
          onMouseDown={() => this.addOffset(10)}
          onMouseUp={this.stopScroll}
        >
          <ShowcaseButtonIcon className="material-icons">
            chevron_left
          </ShowcaseButtonIcon>
        </ShowcaseButton>
        <ShowcaseWrapper>
          <Container>
            <StyledShowcase offset={offset}>
              {items.map((item) => (
                <ShowcaseItem key={item.title} {...item} />
              ))}
            </StyledShowcase>
          </Container>
        </ShowcaseWrapper>
        <ShowcaseButton
          onMouseDown={() => this.addOffset(-10)}
          onMouseUp={this.stopScroll}
        >
          <ShowcaseButtonIcon className="material-icons">
            chevron_right
          </ShowcaseButtonIcon>
        </ShowcaseButton>
      </Row>
    );
  }
}

export default Showcase;
