import React from "react";
import List from "./List"
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Detail from "./Detail";

import {BrowserRouter, Routes, Route} from 'react-router-dom'


export default function App() {


  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/details/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
