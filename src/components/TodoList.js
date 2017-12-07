import React from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { connect } from "react-redux";

const TodoList = props => (
	<div>
		{props.todos.map(todo => <Todo key={todo.id} {...todo} />)}
		<AddTodo />
	</div>
);

const mapStateToProps = state => ({
	todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
