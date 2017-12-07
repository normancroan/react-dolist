import React from "react";
import Todo from "./Todo";
import AddTodo from './AddTodo';

const TodoList = props => (
	<div>
        <Todo />
        <AddTodo />
	</div>
);

export default TodoList;
