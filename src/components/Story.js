import React, { Component } from 'react';
import { Card, Button, Row, Col, Image } from 'react-bootstrap';

class Story extends Component {
    render() {
        return (
            <Card className="story">
                <Card.Body>
                <Card.Title className="red">
                    <span className="story-title">Story Title</span>
                </Card.Title>
                <Card.Subtitle style={{"width": "15%"}}>
                    <Row>
                        <Col>
                            <Image className="user-avatar" src="https://via.placeholder.com/171x180" roundedCircle />
                        </Col>
                        <Col>
                            <b>Username</b> <br/>
                            <b>January 29, 2019</b>
                        </Col>
                    </Row>
                </Card.Subtitle>
                <Card.Img className="story-img"  variant="top" src="https://via.placeholder.com/300" />
                
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Story;
