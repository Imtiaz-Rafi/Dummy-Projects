import React from "react";
import "./App.css";
import Timer from "./timer";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Timer />
            </div>
        );
    }
}

export default App;
