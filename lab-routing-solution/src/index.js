import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from './Navbar'
import About from "./About";
import Detail from "./Detail";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/details/:id" element={<Detail/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
