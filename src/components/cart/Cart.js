import "./Cart.css"
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';



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
  
  console.log(orders)
  console.log(userId)
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
       <Button size="lg" variant="success">Order</Button >
       <br></br>
       <Button size="lg" variant="danger">Clear Cart</Button >
        </form>
    </div>
  );


}
export default Cart;