import React from "react";
import PropTypes from "prop-types";
import { Input, Label } from "reactstrap";

const ViewController = ({ changeView, view }) => {
    return (
        <div className="d-flex">
            <Label for="list-view" className="mr-4">
                <Input
                    type="radio"
                    name="view"
                    value="list"
                    id="list-view"
                    onChange={changeView}
                    className="d-inline-block"
                    checked={view === "list"}
                />
                List
            </Label>
            <Label for="table-view" className="mr-4">
                <Input
                    type="radio"
                    name="view"
                    value="table"
                    id="table-view"
                    onChange={changeView}
                    className="d-inline-block"
                    checked={view === "table"}
                />
                Table
            </Label>
        </div>
    );
};

ViewController.propTypes = {
    view: PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired,
};

export default ViewController;
