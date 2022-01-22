import React from "react";
import "./App.css";
import Timer from "./timer";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Timer</h1>
                <Timer />
            </div>
        );
    }
}

export default App;
