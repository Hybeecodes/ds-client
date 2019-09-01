import React, { Component } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Story extends Component {
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
        const { story } = this.props;
        return (
            <Card className="story">
                <Card.Body>
                <Card.Title>
                    <Link  to={`/story/${story.id}`} className="story-title red ds-link">{story.title}</Link>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    by username on 25 January, 2019
                </Card.Subtitle>
                <Card.Img className="story-img"  variant="top" src={story.image} />
                
                    <Card.Text>
                        {`${story.content.substr(0,150)}...`}<Link to={`/story/${story.id}`} className="red ds-link">(Read more)</Link>
                    </Card.Text>
                    <Row>
                        <Col className="tags">
                            {
                                story.tags.map((tag) => {
                                    return <Button variant="outline-danger" className="tag">{tag}</Button>
                                })
                            }
                        </Col>
                        <Col>
                            <div className="story-actions">
                        84 <i className={`${this.state.likeBtnClass} fa-thumbs-up fa-2x action`} onClick={this.onLikeBtnClick}></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <i className={`${this.state.saveBtnClass} fa-bookmark fa-2x action`} onClick={this.onSaveBtnClick} ></i>
                        </div>
                        </Col>
                    </Row>                    
                </Card.Body>
            </Card>
        )
    }
}

export default Story;
