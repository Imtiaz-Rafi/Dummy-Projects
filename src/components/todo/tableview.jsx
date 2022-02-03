import React from "react";
import PropTypes from "prop-types";
import classes from "./todo.module.css";
import { Button, Input } from "reactstrap";

const RowItem = ({ todo, toggleSelect, toggleComplete }) => {
    return (
        <>
            <tr>
                <td>
                    <Input
                        type="checkbox"
                        name={todo.id}
                        id={todo.id}
                        checked={todo.isSelect}
                        onChange={() => toggleSelect(todo.id)}
                    />
                </td>
                <td>
                    <p className={classes.title}>{todo.text}</p>
                </td>
                <td>
                    <div className={classes.date}>{todo.time.toDateString()}</div>
                </td>
                <td>
                    <Button color={todo.isComplete ? "success" : "danger"} onClick={() => toggleComplete(todo.id)}>
                        {todo.isComplete ? "Completed" : "Running"}
                    </Button>
                </td>
            </tr>
        </>
    );
};

RowItem.prototype = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
};

const TableView = ({ todos, toggleSelect, toggleComplete }) => {
    return (
        <div className={classes.table_row}>
            <table>
                <thead>
                    <tr className={classes.row}>
                        <th>#</th>
                        <th>Todo</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <RowItem
                            key={todo.id}
                            todo={todo}
                            toggleSelect={toggleSelect}
                            toggleComplete={toggleComplete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
TableView.prototype = {
    todos: PropTypes.array.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
};
export default TableView;
