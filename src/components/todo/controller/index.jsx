import React from "react";
import PropTypes from "prop-types";

import SearchInput from "./search-input";

const Controller = ({ term, handleSearch, toggleForm }) => {
    return (
        <div>
            <SearchInput term={term} handleSearch={handleSearch} toggleForm={toggleForm} />
        </div>
    );
};

Controller.propTypes = {
    term: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired,
};

export default Controller;
