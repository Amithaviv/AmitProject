/* eslint-disable no-octal-escape */
/* eslint-disable no-unused-vars */
import "./Home.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { getProducts } from "../.././DAL/serverFunctions";
import { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";

function Home() {
  // getProducts() //check to get products data
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getData() {
      setProducts(await getProducts())
    }
    getData()
  }, [])

  return (
    <div className="App">
      <div id="cards" className="row row-cols-1 row-cols-sm-6 g-4">
    {
      products.map(({name, price, image}, index) => <SingleProduct key={index} name={name} price={price} image={image}></SingleProduct> )
    }
    </div>
    </div>
  );
}
export default Home;
