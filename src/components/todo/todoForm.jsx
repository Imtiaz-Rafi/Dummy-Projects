import React from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

class TodoForm extends React.Component {
    state = {
        text: "",
        desc: "",
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createTodo(this.state);
        event.target.reset();
        this.setState({ text: "", desc: "" });
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Your Task</Label>
                    <Input
                        placeholder="Enter Your Task"
                        name="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Describe Task</Label>
                    <Input
                        type="textarea"
                        placeholder="Describe Your Task"
                        name="desc"
                        value={this.state.desc}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button>Create Task</Button>
            </Form>
        );
    }
}

TodoForm.propTypes = {
    createTodo: PropTypes.func.isRequired,
};

export default TodoForm;
