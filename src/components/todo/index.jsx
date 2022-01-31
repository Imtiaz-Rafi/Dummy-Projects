import React from "react";
import ListView from "./listview";

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
    };

    toggleSelect = (todoId) => {};
    toggleComplete = (todoId) => {};

    render() {
        return (
            <div className="text-center">
                <h1 className="body-element">To Do List</h1>
                <div>
                    <ListView
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
