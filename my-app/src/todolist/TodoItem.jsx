import React from "react";

function TodoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <h3>{props.text} </h3>
    </div>
  );
}
export default TodoItem;
