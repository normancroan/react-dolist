import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todos";

const AddTodo = props => (
	<div>
		<form
			onSubmit={e => {
				e.preventDefault();
				const name = e.target.todo.value;
				props.dispatch(addTodo({ name }));
				e.target.todo.value = "";
			}}
		>
			<input name="todo" type="text" placeholder="To do, or not to do..." />
		</form>
		<button>Add</button>
	</div>
);

const mapStateToProps = state => ({
	todos: state.todos
});
export default connect(mapStateToProps)(AddTodo);
