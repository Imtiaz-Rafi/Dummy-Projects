import React from "react";
import "./todo.css";
import PropTypes from "prop-types";

const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
    return (
        <>
            <div className="list-row">
                <input
                    type="checkbox"
                    name={todo.id}
                    id={todo.id}
                    checked={todo.isSelect}
                    onChange={() => toggleSelect(todo.id)}
                />
                <div className="">
                    <h3 className="title">{todo.title}</h3>
                    <div className="desc">{todo.desc}</div>
                </div>
                <div className="date">{todo.time.toDateString()}</div>
                <div className="todo_btn">
                    <button color={todo.isComplete ? "danger" : "success"} onClick={() => toggleComplete(todo.id)}>
                        {todo.isComplete ? "Completed" : "Running"}
                    </button>
                </div>
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
