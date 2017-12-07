import { createStore, combineReducers } from "redux";
import todosReducer from "../reducers/todos";

export default () =>
	createStore(
		combineReducers({
			todosReducer
		})
	);
