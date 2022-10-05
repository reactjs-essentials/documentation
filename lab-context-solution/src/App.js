import React from "react";
import List from "./List"
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Detail from "./Detail";

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { SharedContextProvider } from "./context/SharedContext";


export default function App() {


  return (
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<SharedContextProvider><Home /></SharedContextProvider>}></Route>
        <Route path="/about" element={ <About /> }></Route>
        <Route path="/details/:id" element={<SharedContextProvider><Detail /></SharedContextProvider>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
