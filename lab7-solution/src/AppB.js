import { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [name, setName] = useState("joao");
  const [age, setAge] = useState(37);
  const handleName = () => setName(name === "joao" ? "juan" : "joao");
  const handleAge = () => setAge(age === 37 ? 20 : 37);
  useEffect(() => {
    console.log("useEffect ran");
  }, [name]);

  return (
    <div>
      <h1>lab-00</h1>
      <button onClick={handleName}>change my name ({name})</button>
      <button onClick={handleAge}>change my age ({age})</button>
    </div>
  );
}
