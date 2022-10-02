import React from "react";
import "./style.css";
import List from "./List"


export default function App() {

  const array = ['Primero', 'Segundo', 'Tercero']

  return (
    <div>
      <h1>Listado de elementos</h1>
      <List items={array}/>
    </div>
  )
}
