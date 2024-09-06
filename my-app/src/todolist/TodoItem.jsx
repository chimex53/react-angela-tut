import React from "react";

function TodoItem(props) {
  return (
    <div
      className
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text} </li>
    </div>
  );
}
export default TodoItem;
