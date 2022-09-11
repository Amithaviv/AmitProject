import "./Cart.css"
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function Cart({userId}) {

async function getOrders() {
    return await fetch(`http://localhost:3100/api/orders/${userId}`,{credentials:"include"})
        .then(response => response.json())
        .then(orders => (orders))
    }

const [orders, setOrders] = useState([])

  useEffect(() => {
    async function getData() {
      setOrders(await getOrders())
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  let totalPrice = 0

  return (
    <div className="App">
        <form className="cartForm">
        <h1>Cart Details:</h1>
        <br></br>
  {Object.values(orders).map(order => {
    return (
        <div>
      <li id="check" key={order.id} >
        Product:{order.productName} Quantity:{order.quantity} price:{order.price}$
      </li>
     <span {...totalPrice+=order.price}></span>
      </div>
    )
  })}
  <br></br>
       <div>Your Cart Total price is: {totalPrice}$</div> 
       <Link type="button" to="/userDetails">
       <Button size="lg" variant="success" onClick={()=>
        {
        // eslint-disable-next-line array-callback-return
        Object.values(orders).map(order => {
        const orderData = {price:order.price,quantity:order.quantity,productName:order.productName,customerId:userId,orderDate:new Date()}
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
        credentials:"include"
        };
        fetch('http://localhost:3100/api/orders/addCart', requestOptions,{credentials:"include"})
        .then(response => response.json())
        .then(data => (data));
        });

        const requestOptions2 = {
            method: 'Delete',
            headers: { 'Content-Type': 'application/json' },
            credentials:"include"
            };
        fetch(`http://localhost:3100/api/orders/delete/${userId}`, requestOptions2,{credentials:"include"})
        .then(response => response.json())
        .then(data => (data));
        }}>Order</Button >
        </Link>
       <br></br>
       <Button size="lg" variant="danger" onClick={()=>
               {const requestOptions3 = {
                method: 'Delete',
                headers: { 'Content-Type': 'application/json' },
                credentials:"include"
                };
            fetch(`http://localhost:3100/api/orders/delete/${userId}`, requestOptions3,{credentials:"include"})
            .then(response => response.json())
            .then(data => (data));
       }}>Clear Cart</Button >
        </form>
    </div>
  );


}
export default Cart;