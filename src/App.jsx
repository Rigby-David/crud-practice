import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todoArray, setTodoArray] = useState([]);
  const [toggle, setToggle] = useState(false);

  function handleComplete(id) {
    const completedTodo = todoArray.map((todo) => {
      if (todo.id === id) {
        return (todo = { ...todo, completed: true });
      } else {
        return todo;
      }
    });
    setTodoArray(completedTodo);
  }

  function handleDelete(id) {
    setTodoArray(todoArray.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <div>
        <h2>Welcome to David&apos;s Todo Manager</h2>
        {!toggle && (
          <button onClick={() => setToggle(true)}>Click to add</button>
        )}
        {toggle && (
          <TodoForm
            setTodoArray={setTodoArray}
            todoArray={todoArray}
            setToggle={setToggle}
          />
        )}
        {todoArray &&
          todoArray.map((todo) => {
            return (
              <>
                <div>
                  <TodoList
                    todo={todo}
                    handleComplete={handleComplete}
                    handleDelete={handleDelete}
                  />
                  ;
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default App;
