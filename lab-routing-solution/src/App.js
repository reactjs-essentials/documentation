import React from "react";
import "./style.css";
import List from "./List"
import { useState, useEffect } from "react"
import useTitle from "./useTitle";

export default function App() {

  const inicialState = ['Primero', 'Segundo', 'Tercero']

  const [array, setArray] = useState(inicialState)

  /*useEffect(() => {
    document.title = 'App page';
  }, []);*/

  useTitle('CUSTOM HOOK')

  
  function handleDeleteItem(id) {
    const newState = array.filter(i => i !== id)
    setArray(newState)
  }

  return (
    <div>
      <h1>Listado de elementos</h1>
      <List items={array} handleDeleteItem={handleDeleteItem} />
    </div>
  )
}
