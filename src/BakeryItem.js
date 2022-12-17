import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// TODO: create a component that displays a single bakery item
export default function BakeryItem({ image, name, desc, price, size, time, cartTotal, addPrice, addItem, items }) {
    const [count, increment] = useState(0);
      function handleClick() {
          increment(count+1);
        addPrice(cartTotal + price);
          addItem([...items, { name: name, count: count}]);
      }

  return (
          <Card border="secondary" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image} width="200" />
                <Card.Body>
          <Card.Title>{name}</Card.Title>
                  <Card.Text>
          <p>{desc}</p>
          <p>{price}</p>
          <p>{size}</p>
          <p>{time}</p>
                  </Card.Text>
          <Button variant="primary" onClick={handleClick}>Add to Cart</Button>
                </Card.Body>
              </Card>
  );
}
