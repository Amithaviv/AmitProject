import './Item.css';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Item() {
  return (
    <div className="App">
    <title>Item page</title>
    <Card id="card" style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/photos/chocolate-chip-cookie-isolated-picture-id517109442?b=1&k=20&m=517109442&s=170667a&w=0&h=3XSUu_Xhzww9oo2h9HHBevZHDLDkRvn8py8r86q6ers=" />
        <Card.Title>Chocolate Chip Cookies</Card.Title>
        <Card.Text>
        chocolate chip cookies taste just like home - crisp on the edges, soft and chewy in the middle, and studded with milk and dark chocolate chips
        </Card.Text>
        <p id="price">Price: 5$</p>
        <Button variant="primary">Add to cart <img id="cartImg"
                src="https://static.thenounproject.com/png/1138102-200.png" alt="Price Button"></img></Button>
    </Card>
    </div>
  );
}

export default Item;
















