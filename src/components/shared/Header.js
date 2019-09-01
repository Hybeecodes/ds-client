import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl} from 'react-bootstrap';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Link to="/">
            <img
                src={require('../../assets/images/devStoriesLogoNew.png')} width={150}
                className="d-inline-block align-top"
                alt="Devstories logo"
            />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"> </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
                <Link to="/login" className="menu-option btn btn-light">Sign In</Link>
                <Link to="/register" className="menu-option btn btn-outline-danger">Sign Up</Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
