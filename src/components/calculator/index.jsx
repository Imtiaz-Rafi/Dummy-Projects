import React from "react";
import classes from "./calc.module.css";
import Board from "./board";

class Calculator extends React.Component {
    state = {
        temp: "",
        val: "",
        ans: 0,
        char: "",
    };

    handleValue = (event) => {
        this.setState({ val: this.state.val * 10 + parseInt(event.target.value) });
        console.log(event.target.value);
    };
    handleOperator = (event) => {
        this.setState({ char: event.target.value, temp: this.state.temp + this.state.val, val: 0 });
    };
    handleDoubleValue = () => {
        this.setState({ val: this.state.val * 100 + 0 });
    };

    handleEqual = () => {
        if (this.state.char === "+") {
            this.setState({ temp: this.state.temp * 1 + this.state.val });
        } else if (this.state.char === "-") {
            this.setState({ temp: this.state.temp - this.state.val });
        } else if (this.state.char === "*") {
            this.setState({ temp: this.state.temp * this.state.val });
        } else if (this.state.char === "/") {
            this.setState({ temp: this.state.temp / this.state.val });
        } else if (this.state.char === "%") {
            this.setState({ temp: this.state.temp % this.state.val });
        } else {
            this.setState({ temp: this.state.val });
        }
        this.setState({ char: "", val: "" });
    };

    handleCancel = () => {
        this.setState({ val: Math.floor(this.state.val / 10) });
    };
    handleReset = () => {
        this.setState({ temp: "", char: "", val: "", ans: 0 });
    };

    render() {
        return (
            <>
                <div className="text-center">
                    <div className="body-element">
                        <h1>Calculator</h1>
                    </div>
                    <div className={classes.calc_body}>
                        <div className={classes.calc_text}>
                            <div className={classes.text}>
                                {this.state.temp}
                                {this.state.char}
                                {this.state.val}
                            </div>
                        </div>
                        {/* PRACTICE */}
                        <Board
                            handleValue={this.handleValue}
                            handleOperator={this.handleOperator}
                            handleEqual={this.handleEqual}
                            handleCancel={this.handleCancel}
                            handleReset={this.handleReset}
                            handleDoubleValue={this.handleDoubleValue}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default Calculator;
