import React from "react";
import { Link } from "react-router-dom";
import timer1 from "../images/timer.jpg";

const Home = () => {
    return (
        <>
            <div className="card">
                <Link to="/timer">
                    <div className="card-body">
                        <img src={timer1} alt="project image" />
                        <h2>Timer</h2>
                    </div>
                </Link>

                <Link to="/calculator">
                    <div className="card-body">
                        <img src={timer1} alt="project image" />
                        <h2>Calculator</h2>
                    </div>
                </Link>
                <Link to="/tiktaktoe">
                    <div className="card-body">
                        <img src={timer1} alt="project image" />
                        <h2>TikTakToe</h2>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default Home;
