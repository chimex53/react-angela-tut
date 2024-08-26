import React, { useState } from "react";
import "./todo.css";

function Todo() {
  const [inputText, setInputText] = useState("");
  const [Items, setItems] = useState([]);

  function handleChange(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((previousitem) => {
      return [...previousitem, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Todo-list</h1>
      </div>
      <div className="form">
        <input
          type="text"
          value={inputText}
          onChange={handleChange}
          placeholder="Add list"
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <ul>
        {Items.map((todoItem) => {
          return <li>{todoItem}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todo;
