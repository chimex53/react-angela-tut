import React, { useState } from "react";
import "./todo.css";
import { IoAdd } from "react-icons/io5";
import { AiOutlineEnter } from "react-icons/ai";
import TodoItem from "./TodoItem";

function Todo() {
  const [inputText, setInputText] = useState("");
  const [Items, setItems] = useState([]);

  function handleChange(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  }

  function addItem() {
    console.log("inputText:", inputText);
    if (inputText?.trim() == "" || inputText == undefined) {
      alert("Please enter a todo!");
      return;
    }

    setItems((previousitem) => {
      return [...previousitem, inputText];
    });
    setInputText("");
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      addItem();
    }
  }
  function deleteItem(id) {
    setItems((previousitem) => {
      return previousitem.filter((Items, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Todo-list</h1>
      </div>
      <div className="form">
        <div className="input_container">
          <input
            type="text"
            value={inputText}
            onChange={handleChange}
            placeholder="Add to list"
            className="input"
            onKeyDown={handleKeyPress}
          />
          <AiOutlineEnter className="icon" />
        </div>

        <button onClick={addItem}>
          <span>
            <IoAdd />
          </span>
        </button>
      </div>

      <div>
        <ul>
          {Items.map((todoItem, index) => (
            <TodoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
