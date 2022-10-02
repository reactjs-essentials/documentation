import React from "react";
import "./style.css";


export default function App() {

  const array = ['Primero', 'Segundo', 'Tercero']

  return (
    <div>
      <ul>
        {array.map((item, idx) => (
          <li key={idx}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
