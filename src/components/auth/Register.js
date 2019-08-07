import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

class Register extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col className="ds-description">
                    </Col>
                    <Col className="registerForm">
                        <Card className="register-form">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="email" placeholder="devstory user" />
                                    <Form.Text className="text-muted error">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="someone@example.com" />
                                    <Form.Text className="text-muted error">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="********" />
                                </Form.Group>
                                <Form.Group controlId="formBasicChecbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="danger" block type="submit">
                                    Sign Up
                                </Button>
                            </Form>
                            <p className="text-center">
                                Already have a GitHub account? <Link to="/login" className="red">Sign In</Link>
                            </p>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Register;
