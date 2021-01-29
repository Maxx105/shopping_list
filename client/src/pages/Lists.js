import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListAPI from "../utils/ListAPI";
// import { AuthContext } from "../Context/AuthContext";
// import LoginForm from "../components/LoginForm";

function Lists(props) {
    const [listName, setListName] = useState('');
    const [listItems, setListItems] = useState([]);

    const { id } = useParams();
    useEffect(() => {
        loadList()
    }, []);
    
    function loadList() {
        ListAPI.getListById(id)
        .then(res => {
            setListName(res.list.name);
            setListItems(res.list.items);
        })
        .catch((err) => console.log(err.response));
    }

    return (
        <div className="container">
            <h1 style = {{textAlign: "center"}}>{listName}</h1>
        </div>
    );
}

export default Lists;