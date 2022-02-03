import React from "react";
import classes from "./todo.module.css";
import ListView from "./listview";
import TableView from "./tableview";
import Controller from "./controller";
import TodoForm from "./todoForm";
import shortid from "shortid";

import { Modal, ModalBody, ModalHeader } from "reactstrap";

class Todolist extends React.Component {
    state = {
        todos: [
            {
                id: "abcdef",
                text: "This is Title",
                desc: "This is Description",
                time: new Date(),
                isComplete: false,
                isSelect: false,
            },
            {
                id: "1234",
                text: "This is Title2",
                desc: "This is Description2",
                time: new Date(),
                isComplete: false,
                isSelect: false,
            },
        ],
        isModalOpen: false,
        SearchTerm: "",
    };

    toggleSelect = (todoId) => {};
    toggleComplete = (todoId) => {};
    handleChange = () => {};
    handleSearch = () => {};
    toggleForm = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    };
    createTodo = (todo) => {
        todo.id = shortid.generate();
        todo.time = new Date();
        todo.isComplete = false;
        todo.isSelect = false;
        const todos = [todo, ...this.state.todos];

        this.setState({ todos });
        this.toggleForm();
    };

    render() {
        return (
            <div className={`"text-center" ${classes.container}`}>
                <h1 className="body-element">To Do List</h1>
                <div>
                    <Controller
                        term={this.state.SearchTerm}
                        handleSearch={this.handleSearch}
                        toggleForm={this.toggleForm}
                    />
                </div>
                <div className={classes.list_view}>
                    <ListView
                        todos={this.state.todos}
                        toggleSelect={this.toggleSelect}
                        toggleComplete={this.toggleComplete}
                    />
                    <TableView
                        todos={this.state.todos}
                        toggleSelect={this.toggleSelect}
                        toggleComplete={this.toggleComplete}
                    />
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleForm}>
                    <ModalHeader>Create New ToDo Task</ModalHeader>
                    <ModalBody>
                        <TodoForm createTodo={this.createTodo} />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Todolist;
