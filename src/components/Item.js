import { response } from "msw/lib/types";
import React from "react";

function Item({ item, handleUpdateItem}) {
  function handleAddToCart(){
    fetch(`http://localhost:4000/items/${item.id}`,{
    method:"PATCH",
    headers:{
      "content-type": "application/json",
    },
    body: JSON.stringify({
      isInCart:!item.isInCart,
    })
  })
  .then(resp=>resp.json())
  .then(update=>()=>handleUpdateItem(update))
  }
  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"} onClick={handleAddToCart}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove">Delete</button>
    </li>
  );
}

export default Item;
