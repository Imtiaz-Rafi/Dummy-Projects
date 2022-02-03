import React from "react";
import PropTypes from "prop-types";
import classes from "./todo.module.css";
import { Button, Input, List } from "reactstrap";

const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
    return (
        <>
            <List type="unstyled" className={classes.list_row}>
                <li>
                    <Input
                        type="checkbox"
                        name={todo.id}
                        id={todo.id}
                        checked={todo.isSelect}
                        onChange={() => toggleSelect(todo.id)}
                    />
                </li>
                <li className={classes.text_body}>
                    <h3 className={classes.title}>{todo.text}</h3>
                    <div className={classes.date}>{todo.time.toDateString()}</div>
                </li>
                <li>
                    <Button color={todo.isComplete ? "success" : "danger"} onClick={() => toggleComplete(todo.id)}>
                        {todo.isComplete ? "Completed" : "Running"}
                    </Button>
                </li>
            </List>
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
