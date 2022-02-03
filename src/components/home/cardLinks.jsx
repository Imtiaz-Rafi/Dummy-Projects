import React from "react";
import { Link } from "react-router-dom";

const CardLinks = ({ path, Cardimage, title }) => {
    return (
        <Link to={path}>
            <div className="card-body">
                <img src={Cardimage} alt="project logos" />
                <h2>{title}</h2>
            </div>
        </Link>
    );
};

export default CardLinks;
