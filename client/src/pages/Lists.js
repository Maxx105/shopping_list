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
    const [quantity, setQuantity] = useState(1);
    const [textDecStyle, setTextDecStyle] = useState({});

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

    function handleQuantityChange(e) {
        e.preventDefault();
        if (parseInt(e.target.value) < 1 ) {
            document.getElementById('quantity').value = "1";
        }
        setQuantity(parseInt(e.target.value));
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        setQuantity(1);
        document.getElementById('listItem').value = "";
        document.getElementById('quantity').value = "";
        postItem();
    }

    function postItem() {
        ListAPI.createListItem({
            listID: id,
            quantity: quantity,
            name: item.listItem
        })
            .then(res => loadList())
            .catch((err) => console.log(err.response));
    }

    function updateStyle(style) {
        ListAPI.updateStyle(style)
        .then(res => loadList())
        .catch((err) => console.log(err.response));
    }

    function setTextDec(id, style) {
        if (!document.getElementById(id).style.textDecoration) {
            document.getElementById(id).style.textDecoration = "line-through"
            updateStyle({
                textDec: "line-through",
                id: document.getElementById(id).id
            })
        } else {
            document.getElementById(id).style.textDecoration = ""
            updateStyle({
                textDec: "",
                id: document.getElementById(id).id
            })
        }
    }

    return (
        <div className="container">
            <h1 style={{textAlign: "center"}}>{listName}</h1>
            <ListAddForm
                onSubmit = {handleFormSubmit}
                onChange = {handleInputChange}
                onQuantityChange = {handleQuantityChange}
            ></ListAddForm>
            <List
                loadList={() => loadList()}
                listItems = {listItems}
                setTextDec = {setTextDec}
            ></List>
        </div>
    );
}

export default Lists;