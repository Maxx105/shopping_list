import React from "react";
// import { Link } from "react-router-dom";

function CreateListForm(props) {
    const formStyle = {
        marginTop: "20px"
    }
    const buttonStyle = {
        paddingLeft: "30px",
        paddingRight: "30px"
    }
    return (
        <div className="login">
        <form onSubmit={props.onSubmit}>
                <div className="form-group" style={formStyle}>
                    <label>Name your list:</label>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="listname"
                            name="listname"
                            placeholder="Enter list name here"
                            onChange={props.onChange}
                        />
                        <div className="input-group-append">
                        <button type="submit" className="btn btn-primary" style={buttonStyle}>
                            +
                        </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateListForm;