import React from "react";
import classes from "./calc.module.css";

class Calculator extends React.Component {
    state = {
        temp: "",
        val: "",
        ans: 0,
        char: "",
    };

    handleValue = (event) => {
        this.setState({ val: this.state.val * 10 + parseInt(event.target.value) });
    };
    handleOperator = (event) => {
        this.setState({ char: event.target.value, temp: this.state.temp + this.state.val, val: 0 });
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

                        <div className={classes.calc_input}>
                            <button className={`${classes.btn} ${classes.btnBlue}`} onClick={this.handleReset}>
                                C
                            </button>
                            <button className={`${classes.btn} ${classes.btnBlue}`} onClick={this.handleCancel}>
                                <i className={`${"fas fa-backspace"} ${classes.icons}`}></i>
                            </button>
                            <button
                                className={`${classes.btn} ${classes.btnBlue}`}
                                onClick={this.handleOperator}
                                value={"%"}
                            >
                                <i className={`${"fas fa-percentage"} ${classes.icons}`}></i>
                            </button>
                            <button
                                className={`${classes.btn} ${classes.btnBlue}`}
                                onClick={this.handleOperator}
                                value={"/"}
                            >
                                <i className={`${"fas fa-divide"} ${classes.icons}`}></i>
                            </button>
                            <button className={classes.btn} onClick={this.handleValue} value={7}>
                                7
                            </button>
                            <button className={classes.btn} onClick={this.handleValue} value={8}>
                                8
                            </button>
                            <button className={classes.btn} onClick={this.handleValue} value={9}>
                                9
                            </button>

                            <button
                                className={`${classes.btn} ${classes.btnBlue}`}
                                onClick={this.handleOperator}
                                value={"*"}
                            >
                                <i className={`${"fas fa-times"} ${classes.icons}`}></i>
                            </button>
                            <button className={classes.btn} onClick={this.handleValue} value={4}>
                                4
                            </button>
                            <button className={classes.btn} onClick={this.handleValue} value={5}>
                                5
                            </button>
                            <button className={classes.btn} onClick={this.handleValue} value={6}>
                                6
                            </button>
                            <button
                                className={`${classes.btn} ${classes.btnBlue}`}
                                onClick={this.handleOperator}
                                value={"-"}
                            >
                                <i className={`${"fas fa-minus"} ${classes.icons}`}></i>
                            </button>
                            <button className={classes.btn} onClick={this.handleValue} value={1}>
                                1
                            </button>
                            <button className={classes.btn} onClick={this.handleValue} value={2}>
                                2
                            </button>
                            <button className={classes.btn} onClick={this.handleValue} value={3}>
                                3
                            </button>
                            <button
                                className={`${classes.btn} ${classes.btnBlue}`}
                                onClick={this.handleOperator}
                                value={"+"}
                            >
                                <i className={`${"fas fa-plus"} ${classes.icons}`}></i>
                            </button>
                            <button
                                className={classes.btn}
                                onClick={() => {
                                    this.setState({ val: this.state.val * 100 + 0 });
                                }}
                            >
                                00
                            </button>
                            <button className={classes.btn} onClick={this.handleValue} value={0}>
                                0
                            </button>
                            <button className={classes.btn} onClick={this.handleOperator} value={"."}>
                                .
                            </button>
                            <button className={`${classes.btn} ${classes.btnBlue}`} onClick={this.handleEqual}>
                                <i className={`${"fas fa-equals"} ${classes.icons}`}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Calculator;
