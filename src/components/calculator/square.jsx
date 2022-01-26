import React from "react";
import classes from "./calc.module.css";
import PropTypes from "prop-types";

const Square = ({ operator, onClick, value, iconName }) => {
    return (
        <>
            <button
                className={`${classes.btn} ${operator && classes.btnBlue} ${iconName && iconName} ${
                    iconName && classes.icons
                }`}
                onClick={onClick}
                value={value}
            >
                {!iconName && value} {/*showing value */}
            </button>
        </>
    );
};

Square.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    operator: PropTypes.bool,
    iconName: PropTypes.string,
};

export default Square;
