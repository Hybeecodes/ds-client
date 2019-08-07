import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Story from './Story';

export class Home extends Component {
    render() {
        return (
            <Row>
                <Col>
                
                </Col>
                <Col md={6} >
                    <Story/>
                </Col>
                <Col>
                
                </Col>
            </Row>
        )
    }
}

export default Home
