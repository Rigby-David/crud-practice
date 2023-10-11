import { useState } from "react";

/* eslint-disable react/prop-types */
export default function TodoForm({ setTodoArray, todoArray, setToggle }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newTodoObj = {
      title: title,
      desc: desc,
      completed: false,
      id: Math.random() * 1000,
    };
    setTodoArray([...todoArray, newTodoObj]);
    setTitle("");
    setDesc("");
    setToggle(false);
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
