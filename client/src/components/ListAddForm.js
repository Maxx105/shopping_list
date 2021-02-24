import React from "react";

function ListAddForm(props) {
    const formStyle = {
        marginTop: "20px"
    }
    const buttonStyle = {
        paddingLeft: "30px",
        paddingRight: "30px"
    }
  return (
      
    <div>
        <form onSubmit={props.onSubmit}>
            <div className="form-group" style={formStyle}>
                <label>Add Item</label>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="listItem"
                        name="listItem"
                        placeholder="Enter item here"
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

export default ListAddForm;