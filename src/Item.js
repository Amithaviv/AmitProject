import './Home.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
    <title>Item page</title>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/photos/chocolate-chip-cookie-isolated-picture-id517109442?b=1&k=20&m=517109442&s=170667a&w=0&h=3XSUu_Xhzww9oo2h9HHBevZHDLDkRvn8py8r86q6ers=" />
      <Card.Body>
        <Card.Title>Chocolate Chip Cookies</Card.Title>
        <Card.Text>
        chocolate chip cookies taste just like home - crisp on the edges, soft and chewy in the middle, and studded with milk and dark chocolate chips
        </Card.Text>
        <p id="price">Price: 5$</p>
        <Button variant="primary">Add to cart <img id="cartImg"
                src="https://static.thenounproject.com/png/1138102-200.png" alt="Price Button"></img></Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;




/*
<div id="card">
          <div className="card">
            <img src="https://media.istockphoto.com/photos/chocolate-chip-cookie-isolated-picture-id517109442?b=1&k=20&m=517109442&s=170667a&w=0&h=3XSUu_Xhzww9oo2h9HHBevZHDLDkRvn8py8r86q6ers="
            className="card-img-top" alt="chocolate chip cookie"></img>
            <div className="card-body">
              <h5 className="card-title">Chocolate Chip Cookies</h5>
              <p className="card-text">chocolate chip cookies taste just like home - crisp on the edges, soft and chewy in the middle, and studded with milk and dark chocolate chips</p>
              <p id="price">Price: 5$</p>
              <button type="button" id="priceBtn">Add to cart <img id="cartImg"
                src="https://static.thenounproject.com/png/1138102-200.png" alt="Price Button"></img></button>
            </div>
          </div>
        </div>
*/













