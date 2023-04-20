// https://www.youtube.com/watch?v=dD0MdMRVHoo

import "./styles.css";
import { useEffect, useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function App() {
  let initialState = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(initialState || []);
  const [input, setInput] = useState("");
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo-List</h1>

      <div className="container">
        {/* Add Task row */}

        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />

        <TodoList
          todos={todos}
          setTodos={setTodos}
          input={input}
          setInput={setInput}
          setEditTodo={setEditTodo}
        />
        {/* Iterate all todos */}
      </div>
    </div>
  );
}
