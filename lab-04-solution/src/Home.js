import React from "react";
import "./style.css";

const Home = () => {
  const todos = [
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
  ];
  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>
              <dl>
                <dt>todo:</dt>
                <dd>{todo.name}</dd>
                <dt>description:</dt>
                <dd>{todo.description}</dd>
                <dt>duedate:</dt>
                <dd>{todo.duedate}</dd>
                <dt>priority:</dt>
                <dd>{todo.priorityLevel}</dd>
                <dt>labels:</dt>
                <dd>{todo.labels}</dd>
              </dl>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
