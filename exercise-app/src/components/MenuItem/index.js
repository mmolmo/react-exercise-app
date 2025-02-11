import React from "react"

const MenuItem = ({items}) => {
return(
    <div>
        <p>${items.itemPrice}</p>
        <h2>{items.itemName}</h2>
        <p>{items.itemDescription}</p>
        <button>Add to Cart</button>
    </div>
);
}

export default MenuItem;