import "./App.css";
import {  useState  } from "react";
import bakeryData from "./bakery-data.json";
import BakeryItem from "./BakeryItem.js"
import FilteredList from "./FilteredList.js"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
    item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
    return(<div>
            <FilteredList list={bakeryData} />
        </div>);

}

export default App;
