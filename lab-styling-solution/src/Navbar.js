import React from "react";
import "./style.css";
import { Link  } from "react-router-dom"
import styles from './Navbar.module.css'


export default function Navbar() {


  return (
    <nav className={styles.navStyled}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </nav>
  )
}
