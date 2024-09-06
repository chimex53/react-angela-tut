import React from "react";
import styles from "./todoitem.module.css";
import { MdDelete } from "react-icons/md";
function Todoitem({ item, todos, setTodos }) {
  function HandleDelete(item) {
    //delete button function
    console.log("delete btn delete fo", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
    console.log(todos);
  }
  const Strike = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={Strike} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => HandleDelete(item)}
            className={styles.delete_btn}
          >
            <MdDelete />
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
export default Todoitem;
