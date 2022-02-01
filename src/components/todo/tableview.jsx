import React from "react";
import PropTypes from "prop-types";
import classes from "./todo.module.css";

const RowItem = ({ todo, toggleSelect, toggleComplete }) => {
    return (
        <>
            <tr>
                <td>
                    <input
                        type="checkbox"
                        name={todo.id}
                        id={todo.id}
                        checked={todo.isSelect}
                        onChange={() => toggleSelect(todo.id)}
                    />
                </td>
                <td>
                    <p className={classes.title}>{todo.title}</p>
                </td>
                <td>
                    <div className={classes.date}>{todo.time.toDateString()}</div>
                </td>
                <td>
                    <button
                        className={`${classes.todo_btn} ${todo.isComplete ? classes.danger : classes.success}`}
                        onClick={() => toggleComplete(todo.id)}
                    >
                        {todo.isComplete ? "Completed" : "Running"}
                    </button>
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
