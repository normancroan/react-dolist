const filtersReducerDefaultState = { hideCompleted: false };

export default (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case "TOGGLE_HIDE_COMPLETED":
			return {
				...state,
				hideCompleted: !state.hideCompleted
			};
		default:
			return state;
	}
};
