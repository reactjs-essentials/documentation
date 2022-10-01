import React from "react";
import "./style.css";


export default function App() {

  const array = ['Primero', 'Segundo', 'Tercero']

  return (
    <div>
      <ul>
        {array.map((element, idx) => (
          <li key={idx}>
            {element}
          </li>
        ))}
      </ul>
    </div>
  )
}
