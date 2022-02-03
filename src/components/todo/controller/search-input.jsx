import React from "react";
import PropTypes from "prop-types";
import { Button, Input } from "reactstrap";

const SearchInput = ({ term, handleSearch, toggleForm }) => {
    return (
        <div className="d-flex">
            <Input type="search" value={term} placeholder="Search" onChange={handleSearch} />
            <Button color="success" onClick={toggleForm}>
                New
            </Button>
        </div>
    );
};

SearchInput.propTypes = {
    term: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired,
};

export default SearchInput;
