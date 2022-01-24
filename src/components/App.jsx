import React from "react";
import { Route, Routes } from "react-router-dom";
import "./css/style.css";

import Navbar from "./navbar";
import Home from "./home";
import Footer from "./footer";
import Timer from "./timer";
import TiktakToe from "./tiktaktoe";

class App extends React.Component {
    render() {
        return (
            <>
                <div className="App">
                    <Navbar />
                    <div className="container">
                        <div className="body gray-bg">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/timer" element={<Timer />} />
                                <Route path="/tiktaktoe" element={<TiktakToe />} />
                            </Routes>
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default App;
