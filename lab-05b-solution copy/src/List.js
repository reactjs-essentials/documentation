import React from "react";
import "./style.css";


 const List = ({pepe}) => {

  //const data = props.items;
  //const { items } = props

  return (
    <div>
      <ul>
        {pepe.map((item, idx) => (
          <li key={idx}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
