import './Home.css';
import Item from './components/item/Item'
import Login from './components/login/Login';
import About from './components/about/About';

import React, { useState } from 'react';

function App() {
  const [cardIsShown, setCardIsShown] = useState(true);
  const [loginIsShown, setLoginIsShown] = useState(false);
  const [aboutIsShown, setAboutIsShown] = useState(false);
  const [itemIsShown, setItemIsShown] = useState(false);


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
        <button type="button" onClick={() => {setCardIsShown(false); setLoginIsShown(true);setAboutIsShown(false);setItemIsShown(false)}} id="btnLogin">Register/Login</button>
        <img type="button" id="accountImg" src="https://www.pikpng.com/pngl/b/154-1540525_male-user-filled-icon-my-profile-icon-png.png" alt="Account Img"></img>
        <img id="cartImg" type="button" src="https://static.thenounproject.com/png/1138102-200.png" alt="Cart Img"></img>
        </div>

        <nav id="navbar" class="navbar navbar-expand-sm bg-info navbar-dark">
            <div class="container-fluid">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" href="/.../App.js/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/.../App.js/">Categories</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/.../App.js/">Contact us</a>
                </li>
                <li class="nav-item">
                  <div type='button' class="nav-link active" onClick={() => {setItemIsShown(false);setCardIsShown(false); setAboutIsShown(true);}}>About</div>
                </li>
              </ul>
            </div>
          </nav>
          
          {itemIsShown && <Item></Item>}
          {aboutIsShown && <About></About>}
          {loginIsShown && <Login></Login>}
          {cardIsShown && <div id="cards" className="row row-cols-1 row-cols-sm-6 g-4">
            <div type="button" onClick={() => {setCardIsShown(false); setItemIsShown(true);}} className="col">
              <div className="card h-100"  id="imgHeight">
                <img src="images\3a61cda0-55c9-4b5a-9d76-03041730172a.jpg" 
                className="card-img-top" alt="Chocolate Chip Cookie"></img>
                <div className="card-body"><h5 className="card-title">Chocolate Chip Cookies<br></br><br></br>price: 5$</h5>
                </div>

              </div>
            </div>
            <div type="button" className="col">
              <div className="card h-100"  id="imgHeight">
                <img src="https://www.recipetineats.com/wp-content/uploads/2020/03/Brownies_0-SQ.jpg" 
                className="card-img-top" alt="Brownies"></img>
                <div className="card-body">
                  <h5 className="card-title">Brownies<br></br><br></br><br></br>price: 15$</h5>
                </div>
              </div>
            </div>
            <div type="button" className="col">
              <div className="card h-100" id="imgHeight">
                <img src="images\8ce7f933-3194-48e0-b47d-96ea55ecfdbd.jpg" 
                className="card-img-top" alt="Macarons"></img>
                <div className="card-body">
                  <h5 className="card-title">Macarons<br></br><br></br><br></br>price: 10$</h5>
                </div>
              </div>
            </div>
    </div>}
    </div>
  );
}

export default App;
