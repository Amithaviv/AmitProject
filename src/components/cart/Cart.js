import "./Cart.css"
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';


function getOrders() {
    return fetch(`http://localhost:3100/api/orders/${1}`,{credentials:"include"})
        .then(response => response.json())
        .then(orders => (orders))
  }
function Cart() {
    const [orders, setOrders] = useState([])

  useEffect(() => {
    async function getData() {
      setOrders(await getOrders())
    }
    getData()
  }, [])
  console.log(orders)
  let totalPrice = 0


  return (
    <div className="App">
        <form className="cartForm">
        <h1>Cart Details:</h1>
        <br></br>
  {orders.map(order => {
    return (
        <div>
      <li id="check" key={order.id} >
        Product:{order.productName} Quantity:{order.quantity} price:{order.price}
      </li>
     <span {...totalPrice+=order.price}></span>
      </div>
    )
  })}
  <br></br>
       <div>Your Cart Total price is: {totalPrice}</div> 
       <Button size="lg" variant="success">Order</Button >
       <br></br>
       <Button size="lg" variant="danger">Clear Cart</Button >
        </form>
    </div>
  );


}
export default Cart;