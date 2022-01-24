import React from "react";
import Board from "./board";
import classes from "./tiktaktoe.module.css";

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

class Game extends React.Component {
    state = {
        history: [{ squares: Array(9).fill(null) }],
        stepNumber: 0,
        xIsNext: true,
    };
    handleClick = (i) => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat({ squares }),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    };
    resetClick = () => {
        this.setState({
            history: [{ squares: Array(9).fill(null) }],
            stepNumber: 0,
            xIsNext: true,
        });
    };

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        let status = "";
        let clickValue = "";

        if (winner) {
            status = "Winner is " + winner;
            clickValue = "Play Again";
        } else {
            if (!current.squares.some((element) => element === null)) {
                status = "Game Draw";
                clickValue = "Play Again";
            } else {
                status = "Next Move is: " + (this.state.xIsNext ? "X" : "O");
                clickValue = "Reset";
            }
        }

        return (
            <>
                <div className="game">
                    <div className="board">
                        <Board onClick={this.handleClick} squares={current.squares} xIsNext={this.state.xIsNext} />
                    </div>
                    <div className={classes.status_info}>
                        <div className={classes.winning_status}>{status}</div>
                        <div className={classes.clickValue}>
                            <button className={classes.clickBtn} onClick={this.resetClick}>
                                {clickValue}
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Game;
