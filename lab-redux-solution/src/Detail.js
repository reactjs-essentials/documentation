import React from "react";
import "./style.css";
import List from "./List"
import {useParams} from 'react-router-dom'
import SharedContext from "./context/SharedContext";
import { useContext } from "react";
import {useSelector, useDispatch} from 'react-redux';


export default function Detail() {

    const { id } = useParams()
    const {info, setInfo} = useContext(SharedContext)

    
    
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    
    console.log("Redux state :" + state)

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
        <section>
      <div>
        <button
          aria-label="Increment value"
            onClick={() => dispatch({type: "INCREMENT"})}

        >
          +
        </button>
        <span>{state}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch({type: "DECREMENT"})}
        >
          -
        </button>
      </div>
        </section>
      </div>
  )
}
