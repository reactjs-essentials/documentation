import React from "react";
import "./style.css";
import List from "./List"
import { Link  } from "react-router-dom"
import SharedContext from "./context/SharedContext";
import { useContext } from "react";


export default function Home() {

  let id = 5;

  const {info, setInfo} = useContext(SharedContext)
  console.log(info)
  return (
    <div>
      <h1>Listado de home</h1>
      <button>
        <Link to={`/details/${id}`}>Ir al detalle</Link>
      </button>
      Info from Context : {info}
      <button onClick ={() => setInfo('set info')}>
        Update Context
      </button>
    </div>
  )
}
