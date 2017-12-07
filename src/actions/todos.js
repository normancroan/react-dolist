import uuid from "uuid";

//ADD TODO
export const addTodo = ({ thing = "", isCompleted = false } = {}) => {
	return {
		type: "ADD_TODO",
		todo: {
			id: uuid(),
			thing,
			isCompleted
		}
	};
};

//TOGGLE TODO
export const toggleTodo = ({ id } = {}) => {
	return {
		type: "TOGGLE_TODO",
        id
	};
};
