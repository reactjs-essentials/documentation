import React from "react";
import "./style.css";
import List from "./List"
import { Link  } from "react-router-dom"
import SharedContext from "./context/SharedContext";
import { useContext } from "react";
import {FirstContext} from "./App";

export default function Home() {

  let id = 5;

  const {info, setInfo} = useContext(SharedContext)

  console.log(info)
  
  return (
    <>
    <div style={{margin :'20px'}}>
      <h1>Listado de home</h1>
      <br/>
      Info from Context : {info}
      <br/>
      <button style={{margin :'20px'}} onClick ={() => setInfo('set info')}>
        Update Context
      </button>
      </div>
      <div>
      <button>
        <Link to={`/details/${id}`}>Ir al detalle</Link>
      </button>
    </div>
    </>
  )
}
