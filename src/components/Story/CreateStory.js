import React, { Component } from 'react';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

export class CreateStory extends Component {
    render() {
        return (
            <div>
                <Form className="create-story-form">
                    <h1 className="red">New Story</h1>
                    <p>Create a new experience story</p>
                    <FormGroup>
                        <Label for="title">Story Title</Label>
                        <Input type="text" name="title" id="title" placeholder="Story Title" />
                    </FormGroup>

                    <FormGroup>
                        <FroalaEditorComponent tag='textarea'/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="tags">Select Related Tag</Label>
                        <Input type="select" name="tags" id="tags">
                            <option>Experience</option>
                            <option>Career</option>
                        </Input>
                    </FormGroup>

                    <Button color="danger" >Create Story</Button>
                </Form>
            </div>
        )
    }
}

export default CreateStory
