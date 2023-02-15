import React from "react";
import "./style.css";
import List from "./List"
import {useState} from "react"

export default function App() {

  const inicialState = ['Primero', 'Segundo', 'Tercero']

  const [array, setArray] = useState(inicialState)
  

  function handleDeleteItem(id){
    const newState = array.filter(i => i !== id)
    setArray(newState)
  }

  return (
    <div>
      <h1>Listado de elementos</h1>
      <List items={array} handleDeleteItem={handleDeleteItem}/>
    </div>
  )
}
