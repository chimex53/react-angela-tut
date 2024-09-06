import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.name.trim()) {
      setTodos([...todos, { ...todo, name: todo.name.trim() }]);
      setTodo({ name: "", done: false });
    } else {
      alert("Please enter a todo item before submitting.");
    }
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.InputContainer}>
        <input
          type="text"
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          placeholder="Enter Todo list"
          className={styles.FormInput}
        />
        <button type="submit" className={styles.Add_Btn}>
          Add
        </button>
      </div>
    </form>
  );
}
