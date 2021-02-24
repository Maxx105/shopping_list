import React from "react";
import ListAPI from "../utils/ListAPI";

function List(props) {

    function deleteItem(id) {
        ListAPI.deleteListItem(id)
            .then(res => props.loadList())
            .catch((err) => console.log(err.response)); 
    }

    return (
        <div>
            <h1 style = {{textAlign: "center"}}>{props.listName}</h1>
            {props.listItems.map((listItem) => (
                <div className="input-group mb-1" key={listItem._id}>
                    <li className="list-group-item">{listItem.name}</li>
                    {/* <li className="list-group-item" onClick={() => props.setTextDecStyle()} style={props.textDec}>{listItem}</li> */}
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-danger" onClick={() => deleteItem(listItem._id)}> 
                            -
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default List;