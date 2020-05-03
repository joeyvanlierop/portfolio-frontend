import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const StyledTypewriter = styled.div`
  display: flex;
  justify-content: flex-start;
  line-height: 1.5;
`;

const BlinkCaret = keyframes`
  from,
  to {
    opacity: 0;
  }
  50% {
    opacity: 100;
  }
}`;

const BlinkingCursor = styled.span`
  overflow: hidden;
  border-bottom: 0.325rem solid;
  width: 1.75rem;
  white-space: nowrap;
  margin-left: 0.2rem;
  margin-bottom: 1.25rem;
  animation: ${BlinkCaret} 0.75s step-end infinite;
`;

export function Typewriter({
  phrases,
  prefix,
  writeSpeed,
  writeTimeout,
  deleteSpeed,
  deleteTimeout,
  loop,
}) {
  const [text, setText] = useState("");
  const [stopped, setStopped] = useState(false);
  const [prefixed, setPrefixed] = useState(false);
  const [suffixed, setSuffixed] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [updated, setUpdated] = useState(true);
  const [prefixIndex, setPrefixIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [waitTime, setWaitTime] = useState(0);

  useEffect(() => {
    if (updated) {
      setUpdated(false);
      setTimeout(() => {
        updatePhrase();
      }, waitTime);
    }
  });

  function getPhrase() {
    return phrases[phraseIndex][0];
  }

  function getSuffix() {
    return phrases[phraseIndex][1];
  }

  function updatePhrase() {
    if (stopped) {
      return;
    }

    if (!prefixed) {
      writePrefix();
    } else if (!deleting) {
      writePhrase();
    } else {
      deletePhrase();
    }

    setUpdated(true);
  }

  function writePrefix() {
    if (prefixIndex < prefix.length) {
      setText(prefix.substring(0, prefixIndex));
      setPrefixIndex(prefixIndex + 1);
      setWaitTime(writeSpeed);
    } else {
      setPrefixed(true);
    }
  }

  function writePhrase() {
    if (letterIndex <= getPhrase().length) {
      setText(prefix + getPhrase().substring(0, letterIndex));
      setLetterIndex(letterIndex + 1);
      setWaitTime(writeSpeed);
    } else if (phraseIndex === phrases.length - 1 && !loop) {
      setStopped(true);
    } else {
      setDeleting(true);
      setSuffixed(true);
      setWaitTime(writeTimeout);
    }
  }

  function deletePhrase() {
    if (letterIndex > 0) {
      setSuffixed(false);
      setText(prefix + getPhrase().substring(0, letterIndex));
      setLetterIndex(letterIndex - 1);
      setWaitTime(deleteSpeed);
    } else {
      setText(prefix);
      setDeleting(false);
      setPhraseIndex((phraseIndex + 1) % phrases.length);
      setWaitTime(deleteTimeout);
    }
  }

  return (
    <StyledTypewriter>
      {text}
      {suffixed && getSuffix()}
      <BlinkingCursor />
    </StyledTypewriter>
  );
}

Typewriter.defaultProps = {
  prefix: "",
  writeSpeed: 80,
  writeTimeout: 600,
  deleteSpeed: 50,
  deleteTimeout: 400,
  loop: true,
};

export default Typewriter;
