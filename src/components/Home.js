import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Story from './Story/Story';
import { connect } from 'react-redux';


export class Home extends Component {
    render() {
        const { stories } = this.props;
        return (
            <Row>
                <Col>
                </Col>
                <Col className="stories" md={6}>
                    {
                        stories && stories.map((story) => {
                            return <Story key={story.id} story={story} />
                        })
                    }
                </Col>
                <Col>
                
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stories: state.story.stories
    }
};

export default connect(mapStateToProps)(Home)
