import { useEffect } from "react";
import { v4 as uuidV4 } from "uuid";

export default function Form({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo
}) {
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
    }
  }, [setInput, editTodo]);

  function onAddTaskHandler(e) {
    e.preventDefault();
    if (input?.length === 0) {
      setEditTodo(null); //user click edit and try to insert empty title
      setInput("");
      return;
    }

    if (editTodo == null) {
      setTodos([...todos, { id: uuidV4(), title: input, completed: false }]);
      setEditTodo(null);
      setInput("");
    } else {
      setTodos(
        todos.map((list) => {
          if (list.id === editTodo.id) {
            return { ...list, title: input };
          }
          return list;
        })
      );
      setEditTodo(null);
      setInput("");
    }
  }

  function onInputChanges(e) {
    setInput(e.target.value);
  }

  return (
    <form onSubmit={onAddTaskHandler}>
      <div className="addTaskDiv">
        <input
          type="text"
          name="task"
          value={input}
          id="task"
          placeholder="Enter a Todo..."
          className="inputbox"
          onChange={onInputChanges}
        ></input>

        <div className="addBtn">
          <button type="submit" name="addTask" id="addTask" value="Add">
            {editTodo == null ? "Add" : "Save"}
          </button>
        </div>
      </div>
    </form>
  );
}
