import TextareaAutosize from "react-textarea-autosize";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import axios from "axios";

const StyledButton = styled(Button)`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.valid};
  border-color: ${(props) => props.theme.colors.valid};
  border-width: 2px;
  width: 45rem;
  margin: 4rem !important;
  justify-content: center;
  display: flex;
  transition: opacity background-color color 0.3s ease-in-out;
  opacity: 0;
  visibility: ${(props) => (props.ready ? "visible" : "hidden")};
  opacity: ${(props) => (props.ready ? 1 : 0)};

  &:hover {
    background-color: rgba(37, 197, 131, 0.28);
    color: ${(props) => props.theme.colors.valid};
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  margin-top: 1rem;
  padding: 0.5rem;
  min-width: 45rem;
  border-radius: 5px;
  border-width: 2px;
  border-color: ${(props) =>
    props.done ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.5)"};
  font-size: 2rem;
  font-family: ${(props) => props.theme.fonts.form};
  transition: border-color 0.5s;

  &:focus {
    outline: none;
  }
`;

function Calgary() {
  const [buttonText, setButtonText] = useState("Generate Document");
  const [file, setFile] = useState();
  const [generated, setGenerated] = useState(false);
  const [doc, setDoc] = useState();
  const [inputs, setInputs] = useState({
    file: null,
    description: "",
    meeting: "",
    deadline: "",
  });

  function handleInputChange(event) {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  }

  function handleFileChange(event) {
    event.persist();
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (buttonText !== "Generate Document") {
      return;
    }

    let data = new FormData();
    data.append("file", file);
    data.append("description", inputs.description);
    data.append("meeting", inputs.meeting);
    data.append("deadline", inputs.deadline);

    setButtonText("Generating Document...");

    axios({
      method: "POST",
      url: "http://localhost:5000/calgary",
      data: data,
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      },
    })
      .then((response) => {
        setDoc(response.data);
        setGenerated(true);
        setButtonText("Generated Document");
      })
      .catch((e) => {
        console.log(e);
        setButtonText("Error");
      });
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        onChange={handleFileChange}
        type="file"
        id="file"
        name="file"
        accept=".pdf"
        style={{ display: "none" }}
      />
      <label htmlFor="file">
        <Button
          fontSize="2rem"
          color="black"
          borderColor="black"
          borderWidth="2px"
        >
          {file ? file.name : "Upload PDF"}
        </Button>
      </label>

      <StyledInput
        as={TextareaAutosize}
        onChange={handleInputChange}
        minRows={3}
        placeholder={"Description"}
        name={"description"}
        value={inputs.description}
        done={inputs.description}
        type={"text"}
        required
      />

      <StyledInput
        placeholder={"Meeting Date"}
        name={"meeting"}
        onChange={handleInputChange}
        value={inputs.meeting}
        done={inputs.meeting}
        type={"text"}
      />

      <StyledInput
        placeholder={"Deadline Date"}
        name={"deadline"}
        onChange={handleInputChange}
        value={inputs.deadline}
        done={inputs.deadline}
        type={"text"}
      />

      <StyledButton
        ready={
          (file && inputs.description && inputs.meeting && inputs.deadline) ||
          generated
        }
        submit={!generated}
        target="_blank"
        href={generated ? doc : "#"}
      >
        {buttonText}
      </StyledButton>
    </StyledForm>
  );
}

export default Calgary;
