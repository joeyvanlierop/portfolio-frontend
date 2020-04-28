import React, { Component } from 'react'
import { Form, Row, Col, Button } from "react-bootstrap"
import TextareaAutosize from 'react-textarea-autosize';

export class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: "",
            valid: false,
        }
    }
    
    componentDidUpdate() {
        this.validateInput()
    }
    
    validateInput() {
        const { name, email, message, valid } = this.state;

        if (name && email && message) {
            this.setValid(true)
        } else {
            this.setValid(false)
        }
    }

    setValid(validity) {
        const { valid } = this.state

        if (valid !== validity) {
            this.setState({ valid: validity })
        }
    }

    submitForm(e) {
        e.preventDefault();

        this.setState({
            buttonText: '...sending'
        });

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
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
            valid: false
        })
    }

    render() {
        const { className } = this.props
        const { name, email, message, valid } = this.state;

        return (
            <Form className={"contact-form " + (className || "")} onSubmit={(e) => this.submitForm(e)}>
                <Row>
                    <Col>
                        <input onChange={(e) => this.setState({ name: e.target.value })} name={"name"} className={"contact-input " + (name ? "valid" : "")} type={"text"} placeholder={"Name"} required value={name} />
                    </Col>
                    <Col>
                        <input onChange={(e) => this.setState({ email: e.target.value })} name={"email"} className={"contact-input " + (email ? "valid" : "")} type={"email"} placeholder={"Email"} required value={email} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TextareaAutosize onChange={(e) => this.setState({ message: e.target.value })} name={"message"} className={"contact-input " + (message ? "valid" : "")} type={"text"} placeholder={"Message"} required value={message} />
                    </Col>
                </Row>
                <Row>
                    <Col className="flex-center-col">
                        <Button variant={valid ? "outline-success" : "outline-danger"} type="submit" className="button button-primary">{"Send"}</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default Contact
