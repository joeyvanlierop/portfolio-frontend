import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";
import Button from "./Button";
import Col from "./Col";
import Flex from "./Flex";
import Row from "./Row";

const StyledInput = styled.input`
  font-size: 1.25rem;
  font-family: ${(props) => props.theme.fonts.form};
  width: 100%;
  padding: 1rem;
  padding-left: 0;
  border: none;
  resize: none;
  background-color: transparent;
  opacity: ${(props) => (props.valid ? 1 : 0.5)};
  color: ${(props) => props.theme.colors.text};
  border-bottom-color: ${(props) => props.theme.colors.text};
  border-bottom-style: dotted;
  border-bottom-width: 2px;
  transition: opacity 0.3s ease;

  &:focus {
    outline: none;
  }
`;

const Form = styled.form``;

const StyledCol = styled(Col)`
  padding: 0;
  margin: 2rem 0;

  &:not(:first-child) {
    margin-left: 2rem;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const StyledButton = styled(Button)`
  color: ${(props) =>
    props.valid ? props.theme.colors.valid : props.theme.colors.invalid};
  border-color: ${(props) =>
    props.valid ? props.theme.colors.valid : props.theme.colors.invalid};
  margin-top: 3rem;
  transition: all 0.3s ease;

  &:hover {
    color: white;
    background-color: ${(props) =>
      props.valid ? props.theme.colors.valid : props.theme.colors.invalid};
  }
`;

export class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      valid: false,
    };
  }

  componentDidUpdate() {
    this.validateInput();
  }

  validateInput() {
    const { name, email, message, valid } = this.state;

    if (name && email && message) {
      this.setValid(true);
    } else {
      this.setValid(false);
    }
  }

  setValid(validity) {
    const { valid } = this.state;

    if (valid !== validity) {
      this.setState({ valid: validity });
    }
  }

  submitForm(e) {
    e.preventDefault();

    this.setState({
      buttonText: "...sending",
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    console.log(data);
    this.resetForm();
    // axios.post('API_URI', data)
    // .then( res => {
    //     this.setState({ sent: true }, this.resetForm())
    // })
    // .catch( () => {
    //   console.log('Message not sent')
    // })
  }

  resetForm() {
    this.setState({
      name: "",
      message: "",
      email: "",
      valid: false,
    });
  }

  render() {
    const { name, email, message, valid } = this.state;

    return (
      <Form onSubmit={(e) => this.submitForm(e)}>
        <Row>
          <StyledCol>
            <StyledInput
              onChange={(e) => this.setState({ name: e.target.value })}
              name={"name"}
              valid={name}
              type={"text"}
              placeholder={"Name"}
              required
              value={name}
            />
          </StyledCol>
          <StyledCol>
            <StyledInput
              onChange={(e) => this.setState({ email: e.target.value })}
              name={"email"}
              valid={email}
              type={"email"}
              placeholder={"Email"}
              required
              value={email}
            />
          </StyledCol>
        </Row>
        <Row>
          <StyledCol>
            <StyledInput
              as={TextareaAutosize}
              onChange={(e) => this.setState({ message: e.target.value })}
              name={"message"}
              valid={message}
              type={"text"}
              placeholder={"Message"}
              required
              value={message}
            />
          </StyledCol>
        </Row>
        <Flex>
          <StyledButton fontSize="1.25rem" valid={valid} submit>
            {"Send"}
          </StyledButton>
        </Flex>
      </Form>
    );
  }
}

export default Contact;
