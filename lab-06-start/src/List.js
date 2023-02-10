import React from "react";
import "./style.css";


 const List = (items) => {

  //const data = props.items;
  //const { items } = props

  return (
    <div>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
