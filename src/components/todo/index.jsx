import React from "react";
import classes from "./todo.module.css";
import ListView from "./listview";
import TableView from "./tableview";
import Controller from "./controller";

class Todolist extends React.Component {
    state = {
        todos: [
            {
                id: "abcdef",
                title: "This is Title",
                desc: "This is Description",
                time: new Date(),
                isComplete: false,
                isSelect: false,
            },
            {
                id: "1234",
                title: "This is Title2",
                desc: "This is Description2",
                time: new Date(),
                isComplete: false,
                isSelect: false,
            },
        ],
        isModalOpen: false,
    };

    toggleSelect = (todoId) => {};
    toggleComplete = (todoId) => {};
    handleChange = () => {};
    handleClick = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
        console.log(this.state.isModalOpen);
    };

    render() {
        return (
            <div className={`"text-center" ${classes.container}`}>
                <h1 className="body-element">To Do List</h1>
                <div>
                    <Controller handleClick={this.handleClick} handleChange={this.handleChange} />
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
            </div>
        );
    }
}

export default Todolist;
