import React, { useState, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import axios from "axios";
import styled from "styled-components";
import Button from "./Button";
import Col from "./Col";
import Flex from "./Flex";
import Row from "./Row";
import api from "../api";

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

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(false);
  const [sent, setSent] = useState(false);
  const [buttonText, setButtonText] = useState("Send");

  useEffect(() => {
    validateInput();
  }, [name, email, message]);

  useEffect(() => {
    updateButtonText();
  }, [sent]);

  function validateInput() {
    if (name && email && message) {
      updateValid(true);
    } else {
      updateValid(false);
    }
  }

  function updateValid(newValid) {
    if (newValid !== valid) {
      setValid(newValid);
    }
  }

  function updateButtonText() {
    if (sent) {
      setButtonText("Sent");
      setValid(true);
    } else {
      setButtonText("Send");
      setValid(false);
    }
  }

  function submitForm(e) {
    e.preventDefault();

    let data = {
      name: name,
      email: email,
      message: message,
    };

    setButtonText("Sending");
    api
      .post("/api/send", {
        data: data,
      })
      .then((response) => {
        if (response.data === "Success") {
          resetForm();
          setSent(true);
        } else {
          setButtonText("Error");
          setValid(false);
        }
      });
  }

  function resetForm() {
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <Row>
        <StyledCol>
          <StyledInput
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setMessage(e.target.value)}
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
          {buttonText}
        </StyledButton>
      </Flex>
    </form>
  );
}

export default Contact;
