/* eslint-disable no-unused-vars */
import "./Home.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../cart/Cart";

function SingleProduct(props) {
  const [myArray, updateMyArray] = useState([]);
    const [count, setCount] = useState(0);
    if(count<0){
      setCount(count+1)
    }
  return (
    <div className="App">
      <div type="button" className="col">
          <div className="card h-100" id="cardHeight">
            <Link type="button" to="/Item">
              <img
                // eslint-disable-next-line no-octal-escape
                src={props.image} id="imgHeight"
                className="card-img-top"
                alt={props.name}
              ></img>
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                {props.name}<br></br>
                <br></br>price: {props.price}$
                <div id="count">
                <div class="qty mt-5">
                        <span class="minus bg-dark" onClick={() => setCount(count - 1)}>-</span>
                        <span>{count}</span>
                        <span class="plus bg-dark" onClick={() => setCount(count + 1)}>+</span>
                </div>
              </div>
              <button id="cartBtn" onClick={() => updateMyArray([props.price, props.name,count])}>Add to cart</button>
              {console.log(myArray)}
            </h5>
          </div>
          </div>
        </div>
    </div>
  );
}
export default SingleProduct;
