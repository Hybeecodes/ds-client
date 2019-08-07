import React, { Component } from 'react';
import { Container, Form, FormGroup, Input, Label, Button, Card } from 'reactstrap';
import { Link } from 'react-router-dom';

export class ForgotPassword extends Component {
    render() {
        return (
            <Container className="loginForm">

                <Card className="form">
                    <h2 className="text-center">Forgot Password </h2>
                    <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="someone@example.com" />
                    </FormGroup>
                    <Button color="danger" block>Submit</Button>
                    </Form>
                    <span className="text-center">
                        <p>
                        <Link to="/login" className="red">Back to Login?</Link>
                        </p>
                    </span>
                </Card>
            </Container>
        )
    }
}

export default ForgotPassword
