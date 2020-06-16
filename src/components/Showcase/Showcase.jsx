import React from "react";
import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { Flex, Grid, Box } from "theme-ui";
import Container from "../Container";
import ShowcaseItem from "./ShowcaseItem";

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
  color: ${({ theme }) => theme.colors.text};
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
    background: linear-gradient(
      right,
      transparent,
      ${({ theme }) => theme.colors.background}
    );
    background: -webkit-linear-gradient(
      right,
      transparent,
      ${({ theme }) => theme.colors.background}
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
    background: linear-gradient(
      left,
      transparent,
      ${({ theme }) => theme.colors.background}
    );
    background: -webkit-linear-gradient(
      left,
      transparent,
      ${({ theme }) => theme.colors.background}
    );
    z-index: 1;
  }
`;

export function Showcase({ items }) {
  const [offset, setOffset] = useState(0);
  const [timer, setTimer] = useState(null);

  const offsetRef = useRef(offset);
  offsetRef.current = offset;

  function addOffset(amount) {
    setOffset(Math.min(offsetRef.current + amount, 0));
    setTimer(setTimeout(addOffset, 10, amount));
  }

  function stopScroll() {
    clearTimeout(timer);
  }

  return (
    <Flex sx={{ width: "100%" }}>
      <ShowcaseButton onMouseDown={() => addOffset(10)} onMouseUp={stopScroll}>
        <ShowcaseButtonIcon className="material-icons">
          chevron_left
        </ShowcaseButtonIcon>
      </ShowcaseButton>
      <ShowcaseWrapper>
        <Container>
          <Flex
            sx={{
              willChange: "transform",
              transform: `translateX(${offset}px)`,
              margin: "auto",
              alignItems: "center",
              transition: "all 0.5s ease-out",

              "& > *": {
                marginRight: "1rem",
              },
            }}
          >
            {items.map((item) => (
              <ShowcaseItem key={item.title} {...item} />
            ))}
          </Flex>
        </Container>
      </ShowcaseWrapper>
      <ShowcaseButton onMouseDown={() => addOffset(-10)} onMouseUp={stopScroll}>
        <ShowcaseButtonIcon className="material-icons">
          chevron_right
        </ShowcaseButtonIcon>
      </ShowcaseButton>
    </Flex>
  );
}

export default Showcase;
