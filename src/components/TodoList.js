import React from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import FilterTodos from "./FilterTodos";
import { connect } from "react-redux";
import selectTodos from '../selectors/todos';

const TodoList = props => (
	<div>
		{props.todos.map(todo => <Todo key={todo.id} {...todo} />)}
        <AddTodo />
        <FilterTodos />
	</div>
);

const mapStateToProps = state => ({
	todos: selectTodos(state.todos, state.filters.hideCompleted)
});

export default connect(mapStateToProps)(TodoList);
