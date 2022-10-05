import React from "react";
import "./style.css";
import List from "./List"
import { Link  } from "react-router-dom"
import styled from "styled-components"

const Button = styled.button`
  background-color: yellow;
`;

export default function Home() {

  let id = 5;

  return (
    <div>
      <h1>Listado de home</h1>
        <Button>
          <Link to={`/details/${id}`}>Ir al detalle</Link>
        </Button>
    </div>
  )
}
