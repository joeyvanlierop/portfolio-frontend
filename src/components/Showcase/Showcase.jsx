import React, { Component, Fragment } from "react";
import styled from "styled-components";
import ShowcaseItem from "./ShowcaseItem";

const ShowcaseRow = styled.section`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
`;

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
`;

const ShowcaseWrapper = styled.div`
  position: relative;
  width: 90%;
  flex-direction: row;
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
    background: -webkit-linear-gradient(right, transparent, #ffffff);
    background: linear-gradient(right, transparent, #ffffff);
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    width: 10%;
    height: 100%;
    right: 0;
    top: 0;
    background: -webkit-linear-gradient(left, transparent, #ffffff);
    background: linear-gradient(left, transparent, #ffffff);
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
    this.myInput = React.createRef();
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
      <ShowcaseRow>
        <ShowcaseButton
          onMouseDown={() => this.addOffset(10)}
          onMouseUp={this.stopScroll}
        >
          <ShowcaseButtonIcon className="material-icons">
            chevron_left
          </ShowcaseButtonIcon>
        </ShowcaseButton>
        <ShowcaseWrapper ref={this.myInput}>
          <StyledShowcase className="main-column" offset={offset}>
            {items.map((item) => (
              <ShowcaseItem key={item.title} {...item} />
            ))}
          </StyledShowcase>
        </ShowcaseWrapper>
        <ShowcaseButton
          onMouseDown={() => this.addOffset(-10)}
          onMouseUp={this.stopScroll}
        >
          <ShowcaseButtonIcon className="material-icons">
            chevron_right
          </ShowcaseButtonIcon>
        </ShowcaseButton>
      </ShowcaseRow>
    );
  }
}

export default Showcase;
