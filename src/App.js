import "./App.css";
import {  useState  } from "react";
import bakeryData from "./bakery-data.json";
import BakeryItem from "./BakeryItem.js"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
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
    /*
    matchesFilterSize = item => {
        // all items should be shown when no filter is selected
        if(this.state.size === “All”) {
            return true
        } else if (this.state.size === item.size) {
            return true
        } else {
            return false
        }
    }
*/
/*
      return (
        <div className="app">
          <div className="filter-container">
            <div>Filter by Category:</div>
            <div>
              <select
                onChange={handleSizeChange}
              >
                <option value="">All Sizes (Reset)</option>
                <option value="large">Large</option>
                <option value="medium">Medium</option>
                <option value="small">Small</option>
              </select>
              <div>
              <select
                onChange={handleTimeChange}
              >
                <option value="">All Times (Reset)</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
              </div>
            </div>
          </div>
          <div className="pastry-list">
            {filteredList.map((element, index) => (
              <BakeryItem {...element} key={index} />
            ))}
          </div>
        </div>
      );
*/
  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
          <div>Filter by Category:</div>
          <div>
            <select
              onChange={onSelectFilteredSize}
            >
              <option value="">All</option>
              <option value="large" selected>large</option>
              <option value="medium">medium</option>
              <option value="small">small</option>
            </select>
            <div>
            <select
              onChange={onSelectFilteredTime}
            >
              <option value="">All</option>
              <option value="morning" selected>morning</option>
              <option value="afternoon">afternoon</option>
              <option value="evening">evening</option>
            </select>
            </div>
          </div>
          
          
    
      {(bakeryData.filter(item => item.size === size)).filter(item => item.time === time).map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <BakeryItem image={item.image}
                        name= {item.name}
                        desc={item.description}
                        price={item.price}
                        size={item.size}
                        time={item.time}
                        cartTotal={cartTotal}
                        addPrice={addPrice}
                        items={items}
                        addItem={addItem}/>
                                        
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
          {items.map((item) => (
              <p>{item.name}</p>
          ))}
          <p>Total: ${cartTotal}</p>
      </div>
    </div>
  );
}

export default App;
