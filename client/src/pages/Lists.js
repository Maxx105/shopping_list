import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListAPI from "../utils/ListAPI";
import List from "../components/List";
import ListAddForm from "../components/ListAddForm";
// import { AuthContext } from "../Context/AuthContext";
// import LoginForm from "../components/LoginForm";

function Lists(props) {
    const [listName, setListName] = useState('');
    const [listItems, setListItems] = useState([]);
    const [item, setItem] = useState('');
    const [textDec, setTextDec] = useState({});

    const { id } = useParams();
    useEffect(() => {
        loadList()
    }, []);
    
    function loadList() {
        ListAPI.getListById(id)
        .then(res => {
            setListName(res.name);
            setListItems(res.items);
        })
        .catch((err) => console.log(err.response));
    }

    function handleInputChange(e) {
        setItem({[e.target.name]: e.target.value})
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        document.getElementById('listItem').value = "";
        postItem();
    }

    function setTextDecStyle() {
        if (textDec !== {textDecoration: "line-through"}) {
            setTextDec({textDecoration: "line-through"})
        } else {
            setTextDec({textDecoration: "underline"})
        }
    }

    function postItem() {
        ListAPI.createListItem({
            listID: id,
            quantity: 1,
            name: item.listItem
        })
            .then(res => loadList())
            .catch((err) => console.log(err.response));
    }

    return (
        <div className="container">
            <h1 style={{textAlign: "center"}}>{listName}</h1>
            <ListAddForm
                onSubmit = {handleFormSubmit}
                onChange = {handleInputChange}
            ></ListAddForm>
            <List
                loadList={() => loadList()}
                listItems = {listItems}
                textDec = {textDec}
                setTextDecStyle = {setTextDecStyle}
            ></List>
        </div>
    );
}

export default Lists;