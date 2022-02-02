import React from "react";
import PropTypes from "prop-types";

const Controller = ({ handleChange, handleClick }) => {
    return (
        <div>
            <input type="search" name="search" id="todoserach" onChange={handleChange} />
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

Controller.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default Controller;
