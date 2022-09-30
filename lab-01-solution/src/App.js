import React from "react";
import HelloClassComponent from "./HelloClassComponent";
import HelloFunctionalComponent from "./HelloFunctionalComponent";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1>lab-01-solution</h1>
      <HelloClassComponent type="Class component" />
      <HelloFunctionalComponent type="Functional component" />
    </div>
  );
}
