import React from "react";
import CardLinks from "./cardLinks";
import timer from "../images/timer.jpg";
import calculator from "../images/calculator.jpg";
import tiktaktoe from "../images/tiktaktoe.jpg";
import todolist from "../images/todolist.jpg";

const Home = () => {
    return (
        <>
            <div className="card">
                <CardLinks path={"/timer"} Cardimage={timer} title={"Timer"} />
                <CardLinks path={"/calculator"} Cardimage={calculator} title={"Calculator"} />
                <CardLinks path={"/tiktaktoe"} Cardimage={tiktaktoe} title={"TikTakToe"} />
                <CardLinks path={"/todolist"} Cardimage={todolist} title={"To Do List"} />
            </div>
        </>
    );
};

export default Home;
