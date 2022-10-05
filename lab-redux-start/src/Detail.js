import React from "react";
import "./style.css";
import List from "./List"
import {useParams} from 'react-router-dom'
import SharedContext from "./context/SharedContext";
import { useContext } from "react";

export default function Detail() {

    const { id } = useParams()

    const {info, setInfo} = useContext(SharedContext)

    console.log(info)
    

  return (
    <div style={{margin :'20px'}}>
      <h1>Listado de detail numero {id}</h1>
      <section style={{margin :'20px'}}>
        <button style={{margin :'20px'}} onClick ={() => setInfo('set detail')}>
          Update Context
        </button>
        <br/>
        Info from Context : {info}
        </section>
      </div>
  )
}
