import React from "react";
import { Link } from "react-router-dom";
import ListAPI from "../../utils/ListAPI";
import "./style.css";

function ListOfLists(props) {

    function deleteListName(id) {
        ListAPI.deleteList(id)
            .then((res) => props.loadLists())
            .catch((err) => console.log(err.response));
    }
    return (
        <div>
            <ul className="list-group">
                {props.lists.map((list) => (
                    <div className="input-group mb-1" key={list._id}>
                        <Link to={`/lists/${list._id}`} style={{color: "black"}}>
                            <li className="list-group-item" id="list-name">{list.name}</li>
                        </Link>
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-danger" onClick={() => deleteListName(list._id)}> 
                                -
                            </button>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default ListOfLists;