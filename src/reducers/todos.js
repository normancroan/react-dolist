const todosReducerDefaultState = [];

export default (state = todosReducerDefaultState, action) => {
	switch (action.type) {
		case "ADD_TODO":
			return [...state, action.todo];
		case "TOGGLE_TODO":
			return state.map(
				todo =>
					todo.id === action.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
			);
		default:
			return state;
	}
};
