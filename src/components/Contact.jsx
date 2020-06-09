import React, { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import styled from "@emotion/styled";
import api from "../api";
import Button from "./Button";
import Col from "./Col";
import Flex from "./Flex";
import Row from "./Row";

const StyledInput = styled.input`
  font-size: 1.25rem;
  font-family: ${({ theme }) => theme.fonts.form};
  width: 100%;
  padding: 1rem;
  padding-left: 0;
  border: none;
  resize: none;
  background-color: transparent;
  opacity: ${(props) => (props.valid && !props.disabled ? 1 : 0.5)};
  color: ${({ theme }) => theme.colors.text};
  border-bottom-color: ${({ theme }) => theme.colors.text};
  border-bottom-style: dotted;
  border-bottom-width: 2px;
  transition: opacity 0.3s ease;

  &:focus {
    outline: none;
  }

  /* Hides the yellow background when autofilling an input field */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: color 9999s ease-out, background-color 9999s ease-out;
    -webkit-transition: color 9999s ease-out, background-color 9999s ease-out;
    transition-delay: 9999s;
    -webkit-transition-delay: 9999s;
  }
`;

const StyledCol = styled(Col)`
  padding: 0;
  margin: 2rem 0;

  &:not(:first-of-type) {
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

function useContactForm(defaultValues, submitCallback) {
  const [inputs, setInputs] = useState(defaultValues);

  function handleSubmit(event) {
    event.preventDefault();

    submitCallback();
  }

  function handleInputChange(event) {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  }

  return { inputs, handleSubmit, handleInputChange };
}

const BUTTON_TEXT = {
  send: "Send",
  sending: "Sending",
  sent: "Sent",
  error: "Retry",
};

export function Contact() {
  function submitCallback() {
    let data = {
      name: inputs.name,
      email: inputs.email,
      message: inputs.message,
    };

    setButtonText("Sending");

    api
      .post(process.env.NEXT_PUBLIC_CONTACT_ROUTE, {
        data: data,
      })
      .then((response) => {
        if (response.data === "Success") {
          setSent(true);
          setValid(true);
          setButtonText(BUTTON_TEXT.sent);
        } else {
          setValid(false);
          setButtonText(BUTTON_TEXT.error);
        }
      })
      .catch(() => {
        setValid(false);
        setButtonText(BUTTON_TEXT.error);
      });
  }

  const [valid, setValid] = useState(false);
  const [sent, setSent] = useState(false);
  const [buttonText, setButtonText] = useState(BUTTON_TEXT.send);
  const { inputs, handleInputChange, handleSubmit } = useContactForm(
    { name: "", email: "", message: "" },
    submitCallback
  );

  useEffect(() => {
    if (inputs.name && inputs.email && inputs.message) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [inputs]);

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <StyledCol>
          <StyledInput
            onChange={handleInputChange}
            placeholder={"Name"}
            name={"name"}
            type={"text"}
            spellCheck={false}
            valid={inputs.name}
            value={inputs.name}
            disabled={sent}
            required
          />
        </StyledCol>
        <StyledCol>
          <StyledInput
            onChange={handleInputChange}
            placeholder={"Email"}
            name={"email"}
            type={"email"}
            spellCheck={false}
            valid={inputs.email}
            value={inputs.email}
            disabled={sent}
            required
          />
        </StyledCol>
      </Row>
      <Row>
        <StyledCol>
          <StyledInput
            as={TextareaAutosize}
            onChange={handleInputChange}
            placeholder={"Message"}
            name={"message"}
            type={"text"}
            valid={inputs.message}
            value={inputs.message}
            disabled={sent}
            required
          />
        </StyledCol>
      </Row>
      <Flex>
        <StyledButton fontSize="1.25rem" valid={valid} disabled={sent} submit>
          {buttonText}
        </StyledButton>
      </Flex>
    </form>
  );
}

export default Contact;
