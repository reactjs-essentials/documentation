import React from "react";
import "./style.css";


 const List = ({items, handleDeleteItem}) => {

  //const data = props.items;

  return (
    <div>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item} <button onClick={() => handleDeleteItem(item)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
