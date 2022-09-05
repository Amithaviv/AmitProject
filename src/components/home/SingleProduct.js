/* eslint-disable no-unused-vars */
import "./Home.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function SingleProduct(props) {
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
              </h5>
            </div>
          </div>
        </div>
    </div>
  );
}
export default SingleProduct;
