import "./Cart.css"

function Cart(props) {
  return (
    <div className="App">
        <form className="cartForm">
        <h1>Cart Details:</h1>
        <div id="products">{props.name}</div>
        </form>
    </div>
  );
}
export default Cart;