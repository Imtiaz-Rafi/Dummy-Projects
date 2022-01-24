import React from "react";
// import "./App.css";
import Game from "./game";

class TiktakToe extends React.Component {
    render() {
        return (
            <div className="text-center">
                <h1 className="body-element">TikTakToe</h1>
                <Game />
            </div>
        );
    }
}

export default TiktakToe;
