import React from "react";
import "./style.css";
import List from "./List"
import {useParams} from 'react-router-dom'


export default function Detail() {

    const { id } = useParams()

  return (
    <div>
      <h1 style={{backgroundColor: 'red'}}>Listado de detail numero {id}</h1>
    </div>
  )
}
