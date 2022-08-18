/* eslint-disable no-unused-vars */
import "./Home.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <div id="cards" className="row row-cols-1 row-cols-sm-6 g-4">
        <div type="button" className="col">
          <div className="card h-100" id="imgHeight">
            <Link type="button" to="/Item">
              <img
                src="images\3a61cda0-55c9-4b5a-9d76-03041730172a.jpg"
                className="card-img-top"
                alt="Chocolate Chip Cookie"
              ></img>
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                Chocolate Chip Cookies<br></br>
                <br></br>price: 5$
              </h5>
            </div>
          </div>
        </div>
        <div type="button" className="col">
          <div className="card h-100" id="imgHeight">
            <img
              src="https://www.recipetineats.com/wp-content/uploads/2020/03/Brownies_0-SQ.jpg"
              className="card-img-top"
              alt="Brownies"
            ></img>
            <div className="card-body">
              <h5 className="card-title">
                Brownies<br></br>
                <br></br>
                <br></br>price: 15$
              </h5>
            </div>
          </div>
        </div>
        <div type="button" className="col">
          <div className="card h-100" id="imgHeight">
            <img
              src="images\8ce7f933-3194-48e0-b47d-96ea55ecfdbd.jpg"
              className="card-img-top"
              alt="Macarons"
            ></img>
            <div className="card-body">
              <h5 className="card-title">
                Macarons<br></br>
                <br></br>
                <br></br>price: 10$
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
