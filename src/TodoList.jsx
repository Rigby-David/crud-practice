/* eslint-disable react/prop-types */
import "./App.css";
export default function TodoList({ todo, handleComplete, handleDelete }) {
  return (
    <div className="todo-list">
      <div key={todo.id} className="todo">
        <p>
          <strong>Title:</strong>
          {todo.title}
        </p>
        <p>
          <strong>Description:</strong>
          {todo.desc}
        </p>
        <button
          className={todo.completed == true ? "true" : "false"}
          onClick={() => handleComplete(todo.id)}
        >
          Click to complete
        </button>
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
}
