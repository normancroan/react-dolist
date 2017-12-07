import React from "react";
import { toggleTodo, removeTodo } from "../actions/todos";
import { connect } from "react-redux";

const Todo = props => (
  <div>
    <p 
    className={props.isCompleted ? "todo-completed" : null}
    onClick={() => props.dispatch(toggleTodo({ id: props.id }))}
    >
		{props.thing}
  </p>
  <button onClick={() => props.dispatch(removeTodo({ id: props.id }))}>x</button>
  </div>
);

export default connect()(Todo);
