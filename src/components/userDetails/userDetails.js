import "./userDetails.css"
import { useState, useEffect } from "react";

function Details({user,userId}) {
  async function getOrders() {
    return await fetch(`http://localhost:3100/api/orders/order/${userId}`,{credentials:"include"})
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
  return (
    <div className="App">
        <form className="form">
        <img id="image" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="userImage"></img>
        <div id="name">{user}</div>
        <br></br>
        <div>Your last orders:</div>
        <div>
        {Object.values(orders).map(order => {
    return (
        <div>
      <li id="check" key={order.id} >
        Order Date:{order.orderDate}, Order product:{order.productName} ,Order price:{order.price}$
      </li>
      </div>
    )
  })}
        </div>
        </form>
    </div>
  );
}
export default Details;
