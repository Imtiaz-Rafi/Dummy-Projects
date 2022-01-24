import React from "react";
import { Link } from "react-router-dom";
import timer from "../images/timer.jpg";
import calculator from "../images/calculator.jpg";
import tiktaktoe from "../images/tiktaktoe.jpg";

const Home = () => {
    return (
        <>
            <div className="card">
                <Link to="/timer">
                    <div className="card-body">
                        <img src={timer} alt="project image" />
                        <h2>Timer</h2>
                    </div>
                </Link>

                <Link to="/calculator">
                    <div className="card-body">
                        <img src={calculator} alt="project image" />
                        <h2>Calculator</h2>
                    </div>
                </Link>
                <Link to="/tiktaktoe">
                    <div className="card-body">
                        <img src={tiktaktoe} alt="project image" />
                        <h2>TikTakToe</h2>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default Home;
