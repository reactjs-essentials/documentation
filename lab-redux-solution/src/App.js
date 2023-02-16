import React from "react";
import Counter from "./Counter";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
