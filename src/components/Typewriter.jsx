import { keyframes } from "@emotion/core";
import React, { useEffect, useRef, useState } from "react";
import { Text } from "theme-ui";

const BlinkCaret = keyframes`
  from,
  to {
    opacity: 0;
  }
  50% {
    opacity: 100;
  }
}`;

// See https://overreacted.io/making-setinterval-declarative-with-react-hooks/ for more information on useInterval
function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export function Typewriter({
  phrases,
  prefix,
  writeSpeed,
  writeTimeout,
  deleteSpeed,
  deleteTimeout,
  loop,
  ...props
}) {
  const [isPrefixed, setIsPrefixed] = useState(false);
  const [isSuffixed, setIsSuffixed] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefixIndex, setPrefixIndex] = useState(props.prefixIndex);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [waitTime, setWaitTime] = useState(0);

  useInterval(() => {
    updatePhrase();
  }, waitTime);

  function getPhrase() {
    return phrases[phraseIndex][0];
  }

  function getSuffix() {
    return phrases[phraseIndex][1];
  }

  function getText() {
    return (
      prefix.substring(0, prefixIndex) + getPhrase().substring(0, letterIndex)
    );
  }

  function updatePhrase() {
    if (!isPrefixed) {
      writePrefix();
    } else if (!isDeleting) {
      writePhrase();
    } else {
      deletePhrase();
    }
  }

  function writePrefix() {
    if (prefixIndex < prefix.length) {
      setPrefixIndex(prefixIndex + 1);
      setWaitTime(writeSpeed);
    } else {
      setIsPrefixed(true);
    }
  }

  function writePhrase() {
    setWaitTime(writeSpeed);

    if (letterIndex <= getPhrase().length) {
      setLetterIndex(letterIndex + 1);
    } else if (!isSuffixed && getSuffix()) {
      setIsSuffixed(true);
    } else if (phraseIndex === phrases.length - 1 && !loop) {
      setWaitTime(0);
    } else {
      setIsDeleting(true);
      setWaitTime(writeTimeout);
    }
  }

  function deletePhrase() {
    setWaitTime(deleteSpeed);

    if (isSuffixed) {
      setIsSuffixed(false);
    } else if (letterIndex > 0) {
      setLetterIndex(letterIndex - 1);
    } else {
      setIsDeleting(false);
      setPhraseIndex((phraseIndex + 1) % phrases.length);
      setWaitTime(deleteTimeout);
    }
  }

  return (
    <Text
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        lineHeight: "1.5",
      }}
    >
      {getText()}
      {isSuffixed && getSuffix()}
      <span
        sx={{
          overflow: "hidden",
          borderBottom: "0.325rem solid",
          width: "1.75rem",
          whiteSpace: "nowrap",
          marginLeft: "0.2rem",
          marginBottom: "1.25rem",
          animation: `${BlinkCaret} 1s step-end infinite`,
        }}
      />
    </Text>
  );
}

Typewriter.defaultProps = {
  prefix: "",
  writeSpeed: 80,
  writeTimeout: 500,
  deleteSpeed: 50,
  deleteTimeout: 250,
  loop: true,
};

export default Typewriter;
