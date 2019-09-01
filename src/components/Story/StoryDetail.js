import React, { Component } from 'react';
import {Button, Card, Col, Row, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

export class StoryDetail extends Component {
    state = {
        likeBtnClass: 'far',
        saveBtnClass: 'far'
    };

    onLikeBtnClick = () => {
        if(this.state.likeBtnClass === 'far'){
            this.setState({likeBtnClass: 'fas red'});
        }else{
            this.setState({likeBtnClass: 'far'});
        }
    };

    onSaveBtnClick = () => {
        if(this.state.saveBtnClass === 'far'){
            this.setState({saveBtnClass: 'fas red'});
        }else{
            this.setState({saveBtnClass: 'far'});
        }
    };
    render() {

        return (
            <div>
                <Card className="story-details">
                    <Card.Body>
                        <Card.Title>
                            <Link  to="/story/123" className="story-title red ds-link">Story Title</Link>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            by username on 25 January, 2019
                        </Card.Subtitle>
                        <Card.Img className="story-img"  variant="top" src="https://via.placeholder.com/1000x400" />

                        <Card.Text>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            <br/>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </Card.Text>
                        <Row>
                            <Col className="tags">
                                <Button variant="outline-danger" className="tag">Tag1</Button>
                                <Button variant="outline-danger" className="tag">Tag2</Button>
                                <Button variant="outline-danger" className="tag">Tag3</Button>
                            </Col>
                            <Col>
                                <div className="story-actions">
                                    84 <i className={`${this.state.likeBtnClass} fa-thumbs-up fa-2x action`} onClick={this.onLikeBtnClick}></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <i className={`${this.state.saveBtnClass} fa-bookmark fa-2x action`} onClick={this.onSaveBtnClick} ></i>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                    <div className="comments">
                        <h5>Comments (1)</h5>
                        <Form>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Write a Comment" />
                            </Form.Group>
                        </Form>
                        <Card className="comment" >
                            <Card.Header>
                            <Card.Subtitle className="mb-2 text-muted">
                                <span>username</span> <span style={{"float": "right"}}>25 January, 2019</span>
                            </Card.Subtitle>
                            </Card.Header>
                            <Card.Body>This is some text within a card body.</Card.Body>
                        </Card>
                        <Card className="comment" >
                            <Card.Header>
                                <Card.Subtitle className="mb-2 text-muted">
                                    <span>username</span> <span style={{"float": "right"}}>25 January, 2019</span>
                                </Card.Subtitle>
                            </Card.Header>
                            <Card.Body>This is some text within a card body.</Card.Body>
                        </Card>
                        <Card className="comment" >
                            <Card.Header>
                                <Card.Subtitle className="mb-2 text-muted">
                                    <span>username</span> <span style={{"float": "right"}}>25 January, 2019</span>
                                </Card.Subtitle>
                            </Card.Header>
                            <Card.Body>This is some text within a card body.</Card.Body>
                        </Card>
                    </div>
                </Card>
            </div>
        )
    }
}

export default StoryDetail;
