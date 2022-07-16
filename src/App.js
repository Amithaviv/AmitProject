import './App.css';
import Login from './Login';
import React, { useState } from 'react';

function App() {
  const [cardIsShown, setCardIsShown] = useState(true);
  return (
    <div className="App">
    <title>Item page</title>
    <link rel="icon" type="image/x-icon" href="https://cdn-icons-png.flaticon.com/512/2413/2413004.png"></link>
    <div className="firstLine">
    <img id="logo"
        src="https://www.freepngimg.com/thumb/cake/59157-vector-logo-bakery-bread-cupcake-free-download-png-hq.png" alt="Logo"></img>
        <div id="search" className="input-group">
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" className="btn btn-outline-primary">search</button>
          </div>
        <button type="button" onClick={() => {<Login></Login>; setCardIsShown(false);}} id="btnLogin">Register/Login</button>
        <img type="button" id="accountImg" src="https://www.pikpng.com/pngl/b/154-1540525_male-user-filled-icon-my-profile-icon-png.png" alt="Account Img"></img>
        <img id="cartImg" type="button" src="https://static.thenounproject.com/png/1138102-200.png" alt="Cart Img"></img>
        </div>

        <nav id="navbar" class="navbar navbar-expand-sm bg-info navbar-dark">
            <div class="container-fluid">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">Categories</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">Contact us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">About</a>
                </li>
              </ul>
            </div>
          </nav>
          
          {cardIsShown && <div id="card">
          <div className="card">
            <img src="https://media.istockphoto.com/photos/chocolate-chip-cookie-isolated-picture-id517109442?b=1&k=20&m=517109442&s=170667a&w=0&h=3XSUu_Xhzww9oo2h9HHBevZHDLDkRvn8py8r86q6ers="
            className="card-img-top" alt="chocolate chip cookie"></img>
            <div className="card-body">
              <h5 className="card-title">Chocolate Chip Cookies</h5>
              <p className="card-text">chocolate chip cookies taste just like home - crisp on the edges, soft and chewy in the middle, and studded with milk and dark chocolate chips</p>
              <p id="price">Price: 5$</p>
              <button type="button" id="priceBtn">Add to cart <img id="cartImg"
                src="https://static.thenounproject.com/png/1138102-200.png" alt="Price Button"></img></button>
            </div>
          </div>
        </div>}
    </div>
  );
}

export default App;
