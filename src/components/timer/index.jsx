import React from "react";
import "./timer.css";

class Timer extends React.Component {
    state = {
        hour: 0,
        minute: 0,
        second: 1,
        start: 0,
    };
    intervalId = null;
    incrementSecond = () => {
        if (this.state.second < 59) this.setState({ second: this.state.second + 1 });
        else this.setState({ second: 0 });
    };
    decrementSecond = () => {
        if (this.state.second > 0) this.setState({ second: this.state.second - 1 });
        else this.setState({ second: 59 });
    };
    incrementMinute = () => {
        if (this.state.minute < 59) this.setState({ minute: this.state.minute + 1 });
        else this.setState({ minute: 0 });
    };
    decrementMinute = () => {
        if (this.state.minute > 0) this.setState({ minute: this.state.minute - 1 });
        else this.setState({ minute: 59 });
    };

    // second, minute->second,

    startTimer = () => {
        if (this.state.second >= 0 && this.state.minute >= 0 && !this.intervalId) {
            this.intervalId = setInterval(() => {
                if (this.state.second === 0 && this.state.minute > 0) {
                    this.setState({ second: 59, minute: this.state.minute - 1, start: 1 });
                } else {
                    this.setState({ second: this.state.second - 1, start: 1 });
                    if (this.state.second === 0 && this.state.minute === 0) {
                        alert("Countdown Finished!");
                        clearInterval(this.intervalId);
                        this.intervalId = null;
                        this.setState({ second: 1, start: 0 });
                    }
                }
            }, 1000);
        }
    };
    pauseTimer = () => {
        if (this.state.second > 0 && this.state.minute >= 0) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            this.setState({ start: 2 });
        }
    };
    resetTimer = () => {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.setState({ second: 1, minute: 0, start: 0 });
    };

    render() {
        return (
            <div className="timer-body">
                <div className="text-center">
                    <div className="body-element">
                        <h1>Timer</h1>
                    </div>
                    <div className="body-element">
                        <button className="btn" onClick={this.incrementMinute}>
                            +
                        </button>
                        {/* <button className="btn" onClick={this.incrementMinute}>+</button> */}
                        <span className="text">
                            {this.state.minute} <span className="text2">min</span>
                        </span>
                        <button className="btn" onClick={this.decrementMinute}>
                            -
                        </button>
                    </div>
                    <div className="body-element">
                        <button className="btn" onClick={this.incrementSecond}>
                            +
                        </button>
                        <span className="text">
                            {this.state.second} <span className="text2">sec</span>
                        </span>
                        <button className="btn" onClick={this.decrementSecond}>
                            -
                        </button>
                    </div>
                </div>
                <div className="text-center">
                    {this.state.start === 0 ? (
                        <button className="btn btn-bottom btn-green" onClick={this.startTimer}>
                            Start
                        </button>
                    ) : this.state.start === 2 ? (
                        <button className="btn btn-bottom btn-green" onClick={this.startTimer}>
                            Resume
                        </button>
                    ) : (
                        <button className="btn btn-bottom btn-yellow" onClick={this.pauseTimer}>
                            Pause
                        </button>
                    )}

                    <button className="btn btn-bottom btn-red" onClick={this.resetTimer}>
                        Reset
                    </button>
                </div>
            </div>
        );
    }
}

export default Timer;
