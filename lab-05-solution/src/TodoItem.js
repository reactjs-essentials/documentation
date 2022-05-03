const TodoItem = (props) => {
  const todo = props.todo;
  return (
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
  );
};

export default TodoItem;
