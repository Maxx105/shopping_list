import React, { useState, useEffect, useContext } from "react";
import ListAPI from "../utils/ListAPI";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import CreateListForm from "../components/CreateListForm";
import ListOfLists from "../components/ListOfLists/ListOfLists";

function CreateList() {
    const {isAuthenticated} = useContext(AuthContext);

    const [listName, setListName] = useState('');
    const [lists, setLists] = useState([]);

    useEffect(() => {
        loadLists()
    }, []);

    function preLoginHomePage() {
        return (
            <div>
                <Link to="/login">
                    <h1 className="nav-item nav-h1nk" id="link" style={{textAlign: "center"}}>Login/Register</h1>
                </Link>
            </div>
          );
    }
    
    function loadLists() {
        ListAPI.getLists()
        .then(res => {
           setLists(res.lists)
        })
        .catch((err) => console.log(err.response));
    }

    function handleInputChange(e) {
        setListName({[e.target.name]: e.target.value})
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        ListAPI.createList({name: listName.listname})
            .then(res => {
                loadLists();
            })
        .catch((err) => console.log(err.response));

        document.getElementById('listname').value = "";
    }

    return (
        <div className="container">
            {!isAuthenticated ? preLoginHomePage() : 
            <div>
                <CreateListForm
                    onChange = {handleInputChange}
                    onSubmit = {handleFormSubmit}
                ></CreateListForm>
                <ListOfLists
                    lists = {lists}
                    loadLists={() => loadLists()}
                ></ListOfLists>
            </div>
            }
        </div>
    );
}

export default CreateList;