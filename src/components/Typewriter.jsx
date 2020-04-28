import React, { Component } from "react";

export class Typewriter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      isStopped: false,
      isPrefixed: false,
      isDeleting: false,
      prefixIndex: 0,
      wordIndex: 0,
      letterIndex: 0,
      waitTime: 0,
    };
  }

  componentDidMount() {
    this.updateWord();
  }

  componentDidUpdate(prevState) {
    const { isStopped } = this.state;

    if (prevState.isStopped === true && isStopped === false) {
      this.updateWord();
    }
  }

  updateWord() {
    const { isStopped, isPrefixed, isDeleting, waitTime } = this.state;

    if (isStopped) {
      return;
    } else if (!isPrefixed) {
      this.writePrefix();
    } else if (!isDeleting) {
      this.writeWord();
    } else {
      this.deleteWord();
    }

    setTimeout(() => {
      this.updateWord();
    }, waitTime);
  }

  writePrefix() {
    const { prefix, writeSpeed } = this.props;
    const { prefixIndex } = this.state;

    if (prefixIndex < prefix.length) {
      this.setState({
        text: prefix.substring(0, prefixIndex),
        prefixIndex: prefixIndex + 1,
        waitTime: writeSpeed,
      });
    } else {
      this.setState({
        isPrefixed: true,
      });
    }
  }

  writeWord() {
    const { prefix, words, writeSpeed, writeTimeout, loop } = this.props;
    const { wordIndex, letterIndex } = this.state;
    const word = words[wordIndex];

    if (letterIndex <= word.length) {
      this.setState({
        text: prefix + word.substring(0, letterIndex),
        letterIndex: letterIndex + 1,
        waitTime: writeSpeed,
      });
    } else if (wordIndex === words.length - 1 && !loop) {
      this.setState({
        isStopped: true,
      });
    } else {
      this.setState({
        isDeleting: true,
        waitTime: writeTimeout,
      });
    }
  }

  deleteWord() {
    const { prefix, words, deleteSpeed, deleteTimeout } = this.props;
    const { wordIndex, letterIndex } = this.state;
    const word = words[wordIndex];

    if (letterIndex > 0) {
      this.setState({
        text: prefix + word.substring(0, letterIndex),
        letterIndex: letterIndex - 1,
        waitTime: deleteSpeed,
      });
    } else {
      this.setState({
        text: prefix,
        isDeleting: false,
        wordIndex: (wordIndex + 1) % words.length,
        waitTime: deleteTimeout,
      });
    }
  }

  render() {
    const { className } = this.props;

    return (
      <div className={"typewriter " + (className || "")}>
        <span>{this.state.text}</span>
        <span className="blinking-cursor" />
      </div>
    );
  }
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
