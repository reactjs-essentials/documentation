import React from "react";
import "./style.css";


 const List = (props) => {

  const data = props.items;

  return (
    <div>
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
