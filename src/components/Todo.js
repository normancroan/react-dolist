import React from "react";
import { toggleTodo } from "../actions/todos";
import { connect } from "react-redux";

const Todo = props => (
    <p 
    className={props.isCompleted ? "todo-completed" : null}
    onClick={() => props.dispatch(toggleTodo({ id: props.id }))}
    >
		{props.thing}
	</p>
);

export default connect()(Todo);
