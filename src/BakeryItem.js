import { useState } from 'react';
// TODO: create a component that displays a single bakery item
export default function BakeryItem({ image, name, desc, price, size, cartTotal, addPrice, addItem, items }) {
    const [count, increment] = useState(0);
      function handleClick() {
          increment(count+1);
        addPrice(cartTotal + price);
          addItem([...items, { name: name, count: count}]);
      }

  return (
          <div>
          <img src={image} width="200"/>
          <p>{name}</p>
          <p>{desc}</p>
          <p>{price}</p>
          <p>{size}</p>
          <button onClick={handleClick}>
          Add to Cart
          </button>
          
          </div>
  );
}
