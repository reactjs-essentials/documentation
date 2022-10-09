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
    <div>
      <h1>Listado de detail numero {id}</h1>

          <button onClick ={() => setInfo('set detail')}>
          Update Context
        </button>
        Info from Context : {info}
      </div>
  )
}
