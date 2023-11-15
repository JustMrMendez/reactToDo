import { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const addTodo = (task) => {
    const newTodoList = [
      ...toDos,
      { id: toDos.length + 1, task: task, done: false },
    ];
    setToDos(newTodoList);
  };
  const deleteTodo = (id) => {
    const newTodoList = toDos.filter((item) => item.id != id);
    setToDos(newTodoList);
  };

  return (
    <div className="first">
      <h1>Weekly To Do</h1>
      <div className="new-todo-cont">
        <input
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
          placeholder="Add New ToDo"
        />
        <button
          onClick={() => {
            addTodo(newTodo);
            setNewTodo("");
          }}
        >
          ➕
        </button>
      </div>
      <ul className="todo-list">
        {toDos.map((item) => {
          return (
            <li key={item.id} className="todo-item">
              <input type="checkbox" value={item.done} />
              <span className="todo-item-text">{item.task} </span>
              <button onClick={() => deleteTodo(item.id)} className="delete">
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;