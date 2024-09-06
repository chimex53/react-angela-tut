import React, { useState } from "react";
import "./todo.css";
import { IoAdd } from "react-icons/io5";
import TodoItem from "./TodoItem";

function Todo() {
  const [inputText, setInputText] = useState("");
  const [Items, setItems] = useState([]);

  //setting up the input function
  function handleChange(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  }
  // Adding some form validation
  function addItem(e) {
    e.preventDefault();
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
  //Enter function
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      addItem(e);
    }
  }

  //Delete funtion
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
      <form>
        <div className="input_container">
          <input
            type="text"
            value={inputText}
            onChange={handleChange}
            placeholder="Enter Todo-list"
            className="input"
            onKeyDown={handleKeyPress}
          />
          <button onClick={addItem} className="Add-btn">
            <span>
              <IoAdd />
            </span>
          </button>
        </div>
      </form>

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
