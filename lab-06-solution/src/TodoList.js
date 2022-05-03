import TodoItem from "./TodoItem";
const TodoList = ({ todos, handleDeleteTodo }) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} handleDeleteTodo={handleDeleteTodo} />
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
