import React from "react";

const todo = props => {
  return (
    <div
      className={`todo${props.todo.purchased ? " done" : ""}`} //ternary operation
      onClick={() => props.toggleItem(props.todo.id)}
    >
      <p>{props.todo.name}</p>
    </div>
  );
};

export default todo;