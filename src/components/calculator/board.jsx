import React from "react";
import Square from "./square";
import PropTypes from "prop-types";
import classes from "./calc.module.css";

const Board = (props) => {
    return (
        <div className={classes.calc_input}>
            <Square onClick={props.handleReset} value={"C"} />
            <Square onClick={props.handleCancel} value={"X"} />
            <Square onClick={props.handleOperator} value={"%"} />
            <Square onClick={props.handleOperator} value={"/"} />

            <Square onClick={props.handleValue} value={"7"} />
            <Square onClick={props.handleValue} value={"8"} />
            <Square onClick={props.handleValue} value={"9"} />
            <Square onClick={props.handleOperator} value={"*"} />

            <Square onClick={props.handleValue} value={"4"} />
            <Square onClick={props.handleValue} value={"5"} />
            <Square onClick={props.handleValue} value={"6"} />
            <Square onClick={props.handleOperator} value={"-"} />

            <Square onClick={props.handleValue} value={"1"} />
            <Square onClick={props.handleValue} value={"2"} />
            <Square onClick={props.handleValue} value={"3"} />
            <Square onClick={props.handleOperator} value={"+"} />

            <Square onClick={props.handleDoubleValue} value={"00"} />
            <Square onClick={props.handleValue} value={"0"} />
            <Square onClick={props.handleOperator} value={"."} />
            <Square onClick={props.handleEqual} value={"="} />
        </div>
    );
};

Board.propTypes = {
    handleValue: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
    handleOperator: PropTypes.func.isRequired,
    handleEqual: PropTypes.func.isRequired,
    handleDoubleValue: PropTypes.func.isRequired,
    // value: PropTypes.number.isRequired,
};

export default Board;
