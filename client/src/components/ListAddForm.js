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
        <form>
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
                        <input id="quantity" type="number" step="1" placeholder="1" style={{width: "100px"}} onChange = {props.onQuantityChange}/>
                    </div>
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary" style={buttonStyle} onClick={props.onSubmit}>
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