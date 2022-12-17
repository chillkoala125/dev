import { useState } from 'react';
import bakeryData from "./bakery-data.json";
import BakeryItem from "./BakeryItem.js"
import "./App.css";
// TODO: create a component that displays a single bakery item
export default function FilteredList() {
    // TODO: use useState to create a state variable to hold the state of the cart
    /* add your cart state code here */
    const [cartTotal, addPrice] = useState(0);
    const [items, addItem] = useState([]);
    const [size, changeSize] = useState("large");
    const [time, changeTime] = useState("morning");
    
    function onSelectFilteredSize(event) {
        changeSize(event.target.value);
    }
    function onSelectFilteredTime(event) {
        changeTime(event.target.value);
    }
    
    function resetFilters() {
       changeSize("All");
        changeTime("All");
        document.getElementById('sizeSel').value = 'All';
        document.getElementById('timeSel').value = 'All';
    }
    
    function filterSizeList() {
        if(size === "All")
            return bakeryData;
        else
            return bakeryData.filter(item => item.size === size);
    }
    
    function filterTimeList() {
        if(time === "All")
            return filterSizeList();
        else
            return bakeryData.filter(item => item.time === time);
    }
    
    function handleRemove() {
      const newList = [];
        addPrice(0);
      addItem(newList);
    }

   
    return (
            <div class="App">
            <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
            <div>Filter by Category:</div>
            <div>
            <select id="sizeSel"
            onChange={onSelectFilteredSize}
            >
            <option value="All">All</option>
            <option value="large" selected>large</option>
            <option value="medium">medium</option>
            <option value="small">small</option>
            </select>
            <div>
            <select id="timeSel"
            onChange={onSelectFilteredTime}
            >
            <option value="All">All</option>
            <option value="morning" selected>morning</option>
            <option value="afternoon">afternoon</option>
            <option value="evening">evening</option>
            </select>
            </div>
            <button onClick={resetFilters}>Reset Filters</button>
            </div>
            
            
            
            <div class = "row">
            <div class="cards">
            {filterTimeList().map((item, index) => ( // TODO: map bakeryData to BakeryItem components
                                                          <div class="cardrow">                                                            <BakeryItem image={item.image}
                                                                                                                      name= {item.name}
                                                                                                                      desc={item.description}
                                                                                                                      price={item.price}
                                                                                                                      size={item.size}
                                                                                                                      time={item.time}
                                                                                                                      cartTotal={cartTotal}
                                                                                                                      addPrice={addPrice}
                                                                                                                      items={items}
                                                                                                                      addItem={addItem}/>
                                                                                      </div>
                                                                                                                      
                                                                                                                      ))}
            
            </div>
            <div class="cart">
            <h2>Cart</h2>
            {/* TODO: render a list of items in the cart */}
            {items.map((item) => (
                                  <p>{item.name}</p>
                                  ))}
            <p>Total: ${cartTotal}</p>
            
            <p><button onClick={handleRemove}>Remove items from Cart</button></p>
            
            </div>
            </div>
            </div>
            );
}
