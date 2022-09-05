/* eslint-disable no-unused-vars */
import "./Home.css";
import Item from "./components/item/Item";
import Login from "./components/login/Login";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Register from "./components/register/Register";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useState } from "react";
import Categories from "./components/categories/Categories";
import { getUsers } from "./DAL/serverFunctions";
import { getProducts } from "./DAL/serverFunctions";
function App() {
  getUsers() //check to get users data
  getProducts() //check to get products data
  return (
    <div className="App">
      <Router>
        <title>Item page</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://cdn-icons-png.flaticon.com/512/2413/2413004.png"
        ></link>
        <div className="firstLine">
          <img
            id="logo"
            src="https://www.freepngimg.com/thumb/cake/59157-vector-logo-bakery-bread-cupcake-free-download-png-hq.png"
            alt="Logo"
          ></img>
          <div id="search" className="input-group">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button type="button" className="btn btn-outline-primary">
              search
            </button>
          </div>
          <Link type="button" class="nav-link active" id="btnLogin" to="/Login">
            Register/Login
          </Link>
          <img
            type="button"
            id="accountImg"
            src="https://www.pikpng.com/pngl/b/154-1540525_male-user-filled-icon-my-profile-icon-png.png"
            alt="Account Img"
          ></img>
          <img
            id="cartImg"
            type="button"
            src="https://static.thenounproject.com/png/1138102-200.png"
            alt="Cart Img"
          ></img>
        </div>

        <nav id="navbar" class="navbar navbar-expand-sm bg-info navbar-dark">
          <div class="container-fluid">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link type="button" class="nav-link active" to="/Home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
              <Link type="button" class="nav-link active" to="/Categories">
                  Categories
                </Link>
              </li>
              <li class="nav-item">
              <Link type="button" class="nav-link active" to="/Contact">
                  Contact us
                </Link>
              </li>
              <li class="nav-item">
                <Link type="button" class="nav-link active" to="/About">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <Routes>
            <Route element={<About />} path="/About"></Route>
          </Routes>
          <Routes>
            <Route element={<Home />} path="/Home"></Route>
          </Routes>
          <Routes>
            <Route element={<Home />} path="/"></Route>
          </Routes>
          <Routes>
            <Route element={<Login />} path="/Login"></Route>
          </Routes>
          <Routes>
            <Route element={<Item />} path="/Item"></Route>
          </Routes>
          <Routes>
            <Route element={<Register />} path="/Register"></Route>
          </Routes>
          <Routes>
            <Route element={<Categories />} path="/Categories"></Route>
          </Routes>
          <Routes>
            <Route element={<Contact />} path="/Contact"></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
