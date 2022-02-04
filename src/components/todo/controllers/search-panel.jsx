import React from "react";
import PropTypes from "prop-types";
import { Button, Input } from "reactstrap";

const SearchPanel = ({ term, handleSearch, toggleForm }) => {
    return (
        <div className="d-flex my-3">
            <Input
                className="mr-3"
                type="search"
                value={term}
                placeholder="Search"
                onChange={(e) => handleSearch(e.target.value)}
            />
            <Button color="success" onClick={toggleForm}>
                New
            </Button>
        </div>
    );
};

SearchPanel.propTypes = {
    term: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired,
};

export default SearchPanel;
