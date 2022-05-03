import { React, useState } from "react";
import "./style.css";
import TodoList from "./TodoList";

const Home = () => {
  const [todos, setTodos] = useState([
    {
      id: "1",
      name: "subscribe to the gym",
      description: "Gym near home",
      duedate: "01/06/2022",
      priorityLevel: "1",
      labels: ["Personal"],
    },
    {
      id: "2",
      name: "schedule long vacations",
      description: "...more than 2 weeks",
      duedate: "01/06/2022",
      priorityLevel: "2",
      labels: ["work", "personal"],
    },
    {
      id: "3",
      name: "Prepare React training",
      description: "Prepare labs and documentation",
      duedate: "02/06/2022",
      priorityLevel: "2",
      labels: ["work"],
    },
    {
      id: "4",
      name: "Get Azure Certification",
      description: "Study hard to get a raise in the end of the year",
      duedate: "02/06/2022",
      priorityLevel: "1",
      labels: ["work"],
    },
  ]);

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      <h1>Todo List</h1>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </>
  );
};

export default Home;
