import React, { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Box, Button, Flex, Grid, Input } from "theme-ui";
import api from "../api";

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

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Grid columns={[1, 2]} gap={["2rem", "4rem"]} sx={{ my: "2rem" }}>
        <Input
          variant={inputs.name && !sent ? "input" : "muted"}
          onChange={handleInputChange}
          placeholder={"Name"}
          name={"name"}
          type={"text"}
          spellCheck={false}
          value={inputs.name}
          required
        />
        <Input
          variant={inputs.email && !sent ? "input" : "muted"}
          onChange={handleInputChange}
          placeholder={"Email"}
          name={"email"}
          type={"email"}
          spellCheck={false}
          value={inputs.email}
          required
        />
      </Grid>

      <Input
        variant={inputs.message && !sent ? "input" : "muted"}
        as={TextareaAutosize}
        onChange={handleInputChange}
        placeholder={"Message"}
        name={"message"}
        type={"text"}
        value={inputs.message}
        disabled={sent}
        required
      />

      <Flex sx={{ justifyContent: "center" }}>
        <Button
          sx={{
            fontSize: "1.25rem",
            color: valid ? "valid" : "invalid",
            borderColor: valid ? "valid" : "invalid",
            marginTop: "3rem",
            transition: "all 0.3s ease",

            ":hover": {
              color: "white",
              backgroundColor: valid ? "valid" : "invalid",
            },
          }}
          disabled={sent}
          as="button"
        >
          {buttonText}
        </Button>
      </Flex>
    </Box>
  );
}

export default Contact;
