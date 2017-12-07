import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todos";

const AddTodo = props => (
	<div>
		<form
			onSubmit={e => {
				e.preventDefault();
				const thing = e.target.todo.value;
				props.dispatch(addTodo({ thing }));
				e.target.todo.value = "";
			}}
		>
			<input name="todo" type="text" placeholder="To do, or not to do..." />
		</form>
	</div>
);

export default connect()(AddTodo);
