import uuid from "uuid";

//ADD TODO
export const addTodo = ({ name = "", isCompleted = false } = {}) => {
	return {
		type: "ADD_TODO",
		todo: {
			id: uuid(),
			name,
			isCompleted
		}
	};
};
