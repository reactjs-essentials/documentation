import React from "react";
import "./style.css";
import { Link  } from "react-router-dom"


export default function Navbar() {


  return (
    <nav>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </nav>
  )
}
