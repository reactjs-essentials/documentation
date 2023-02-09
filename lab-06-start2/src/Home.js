import React from "react";
import "./style.css";
import List from "./List"
import { Link  } from "react-router-dom"


export default function Home() {

  let id = 5;

  return (
    <div>
      <h1>Listado de home</h1>
      <button>
        <Link to={`/details/${id}`}>Ir al detalle</Link>
      </button>
    </div>
  )
}
