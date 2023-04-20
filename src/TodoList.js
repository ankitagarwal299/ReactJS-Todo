export default function TodoList({ todos, setTodos, setEditTodo }) {
  function handleEditTask(todo) {
    /* Add New Task Code */
    setEditTodo(todo);
  }

  function handleDeleteTask(todo) {
    /* Add New Task Code */
    setTodos(todos.filter((list) => list.id !== todo.id));
  }

  function handleCompleteTask(todo) {
    setTodos(
      todos.map((list) => {
        if (list.id === todo.id) {
          return { ...list, completed: !list.completed };
        }
        return list;
      })
    );
  }

  return todos
    .sort((a, b) => b.id - a.id)
    .map((todo) => (
      <div className="tasks" key={todo.id}>
        <span className={todo.completed ? "taskName completed" : "taskName"}>
          {todo.title}
        </span>
        <div className="actionBtns">
          <button
            type="button"
            name="completeTask"
            value={todo}
            onClick={() => handleCompleteTask(todo)}
          >
            Complete
          </button>

          <button
            type="button"
            name="editTask"
            onClick={() => handleEditTask(todo)}
          >
            Edit
          </button>

          <button
            type="button"
            name="deletetask"
            onClick={() => handleDeleteTask(todo)}
          >
            Delete
          </button>
        </div>
      </div>
    ));
}
