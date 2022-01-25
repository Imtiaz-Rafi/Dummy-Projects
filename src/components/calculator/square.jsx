import React from "react";
import classes from "./calc.module.css";
import PropTypes from "prop-types";

const Square = (props) => {
    return (
        <>
            <button className={`${classes.btn} ${classes.btnBlue}`} onClick={props.onClick} value={props.value}>
                {props.value}
            </button>
        </>
    );
};

Square.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default Square;
