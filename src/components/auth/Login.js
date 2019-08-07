import React, { Component } from 'react';
import { Container, Form, FormGroup, Input, Label, Button, Card } from 'reactstrap';
import DevstoriesLogo from '../../assets/images/devStoriesLogoNew.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Login extends Component {
    render() {
        return (
            <Container className="loginForm">

                <Card className="form">
                    <h2 className="text-center">Log Into <img src={DevstoriesLogo} alt="Devstories" width={150} /> </h2>
                    <Button color="secondary" size="lg" block> <FontAwesomeIcon icon="github" /> Continue with GitHub</Button>
                    <p class="text-center" className="or">OR</p>
                    <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="someone@example.com" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="********" />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input type="checkbox" />
                        Remember me
                        </Label>
                    </FormGroup>
                    <Button color="danger" block>Sign In</Button>
                    </Form>
                    <span className="text-center">
                        <Link to="/forgot-password" className="red">Forgot Password?</Link>
                        <p>
                        Don't have an Account Yet? <Link to="/register" className="red">Sign Up</Link>
                        </p>
                    </span>
                </Card>
            </Container>
        )
    }
}

export default Login
