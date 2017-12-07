import { createStore, combineReducers } from "redux";
import todosReducer from "../reducers/todos";
import filtersReducer from "../reducers/filters";

export default () =>
	createStore(
		combineReducers({
			todos: todosReducer,
			filters: filtersReducer
		})
	);
