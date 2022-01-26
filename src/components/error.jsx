import React from "react";
import "./css/error.css";
import { Link } from "react-router-dom";

const Error = () => (
    <>
        <div className="notfound">
            <div className="notfound-404">
                <h1>404</h1>
            </div>
            <h2>Sorry, Page not Found!</h2>
            <p>
                The Page You are looking for might have been removed or its name has changed or currently unavailable!
            </p>
            <Link className="err-btn" to="/">
                Return to Home Page
            </Link>
        </div>
    </>
);

export default Error;
