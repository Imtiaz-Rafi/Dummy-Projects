import React from "react";
import "./App.css";
import Game from "./game";

class TiktakToe extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>TikTakToe</h1>
                <Game />
            </div>
        );
    }
}

export default TiktakToe;
