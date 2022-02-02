import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Link to="/">
            <div className="top-navbar">
                <h1 className="body-heading">My Dummy Projects</h1>
            </div>
        </Link>
    );
};

export default Navbar;
