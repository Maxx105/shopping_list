import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthAPI from "../utils/AuthAPI";
// import UserAPI from "../../utils/UserAPI";
import { AuthContext } from "../Context/AuthContext";

function Navbar() {
  const {
    isAuthenticated,
    user,
    setIsAuthenticated,
    setUser
  } = useContext(AuthContext);
  function onClickLogoutHandler() {
    AuthAPI.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  }

  function preLoginNavbar() {
    return (
      <>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <Link to="/">
              <li className="nav-item nav-link" id="link" >Home</li>
            </Link>
            {/* <Link to="/about">
              <li className="nav-item nav-link" id="link">About</li>
            </Link> */}
            <Link to="/login">
              <li className="nav-item nav-link" id="link">Login/Register</li>
            </Link>
          </ul>
        </div>
      </>
    );
  }
  function postLoginNavBar() {
    return (
      <>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <Link to="/">
              <li className="nav-item nav-link" id="link">Home</li>
            </Link>
            {/* <Link to="/lists">
              <li className="nav-item nav-link" id="link">My Lists</li>
            </Link> */}
            {/* <Link to="/createlist">
              <li className="nav-item nav-link" id="link" >Create New List</li>
            </Link> */}
          </ul>
          <ul className="navbar-nav">
            <Link to="/">
              <li className="nav-item nav-link" id="link" onClick={onClickLogoutHandler}>
                Logout
              </li>
            </Link>
            <li className="nav-item nav-link disabled" id="username">
              Hello, {user.username}
            </li>
          </ul>
        </div>
      </>
    );
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand" ></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* {postLoginNavBar()} */}
      {!isAuthenticated ? preLoginNavbar() : postLoginNavBar()}
    </nav>
  );
}
export default Navbar;
