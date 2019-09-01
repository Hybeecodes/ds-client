import React, { Component } from 'react';
import { Container, Form, FormGroup, Input, Label, Button, Card, Alert } from 'reactstrap';
import DevstoriesLogo from '../../assets/images/devStoriesLogoNew.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../store/actions/authActions';

export class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state);
        
    }
    render() {
        const { authError } = this.props;
        return (
            <Container className="loginForm">
            
                <Card className="form">
                    <h2 className="text-center">Log Into <img src={DevstoriesLogo} alt="Devstories" width={150} /> </h2>
                    <Button color="secondary" size="lg" block> Continue with GitHub</Button>
                    <p className="text-center or" >OR</p>
                    <Form onSubmit={this.handleSubmit}>
                        {
                            authError ?
                             <Alert color="danger" className="text-center">
                                { authError}
                          </Alert> :

                           ''
                        }
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" value={this.state.email} name="email" id="email" onChange={this.handleChange} placeholder="someone@example.com" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" value={this.state.password} name="password" onChange={this.handleChange} id="password" placeholder="********" />
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

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    } 
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (creds) => dispatch(login(creds))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
