import { useState } from 'react';
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
// TODO: create a component that displays a single bakery item
export default function BakeryItem({ image, name, desc, price, size, time, cartTotal, addPrice, addItem, items }) {
    const [count, increment] = useState(0);
      function handleClick() {
          increment(count+1);
        addPrice(cartTotal + price);
          addItem([...items, { name: name, count: count}]);
      }

  return (
          <div class="cardcol">
          <div class="card">
          <img src={image} width="200"/>
          <h5>{name}</h5>
          <p>{price}</p>
          <p>{size}</p>
          <p>{time}</p>
          <button onClick={handleClick}>Add to Cart</button>
          </div>
          </div>
  );
}
