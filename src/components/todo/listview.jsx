import React from "react";
import PropTypes from "prop-types";
import classes from "./todo.module.css";

const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
    return (
        <>
            <div className={classes.list_row}>
                <input
                    type="checkbox"
                    name={todo.id}
                    id={todo.id}
                    checked={todo.isSelect}
                    onChange={() => toggleSelect(todo.id)}
                />
                <div className="">
                    <h3 className={classes.title}>{todo.title}</h3>
                    <div className={classes.desc}>{todo.desc}</div>
                </div>
                <div className={classes.date}>{todo.time.toDateString()}</div>
                {/* <div className={classes.todo_btn}> */}
                <button
                    className={`${classes.todo_btn} ${todo.isComplete ? classes.danger : classes.success}`}
                    onClick={() => toggleComplete(todo.id)}
                >
                    {todo.isComplete ? "Completed" : "Running"}
                </button>
                {/* </div> */}
            </div>
        </>
    );
};

ListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
};

const ListView = ({ todos, toggleSelect, toggleComplete }) => {
    return todos.map((todo) => (
        <ListItem key={todo.id} todo={todo} toggleSelect={toggleSelect} toggleComplete={toggleComplete} />
    ));
};
ListView.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
};

export default ListView;
