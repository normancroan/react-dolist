//Show incomplete todos
export default (todos, hideCompleted = false) => {
	return hideCompleted ? todos.filter(todo => !todo.isCompleted) : todos;
};
