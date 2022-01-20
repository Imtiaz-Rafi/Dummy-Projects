import React from "react";
import Square from "./square";
import classes from "./tiktaktoe.module.css";
const Board = (props) => {
    const renderSquare = (i) => (
        <Square xIsNext={props.xIsNext} value={props.squares[i]} onClick={() => props.onClick(i)} />
    );
    return (
        <>
            <div className={classes.boardRow}>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className={classes.boardRow}>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className={classes.boardRow}>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </>
    );
};

export default Board;
