import React from "react";
import ListView from "./listview";
class Todolist extends React.Component {
    render() {
        return (
            <div className="text-center">
                <h1 className="body-element">To Do List</h1>
                <ListView />
            </div>
        );
    }
}

export default Todolist;
