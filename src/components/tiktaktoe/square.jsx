import React from "react";
import classes from "./tiktaktoe.module.css";

const Square = (props) => {
    return (
        <div
            className={`${classes.square} ${props.value === "X" && classes.x_back} ${
                props.value === "O" && classes.o_back
            } ${!props.value && (props.xIsNext ? classes.x_hover : classes.o_hover)}`}
            onClick={props.onClick}
        >
            {props.value}
        </div>
    );
};

export default Square;
