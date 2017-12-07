import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

store.subscribe(() => {
	console.log(store.getState());
});

console.log(store.getState())

class App extends Component {
	render() {
		return (
			<div className="App">
				<Provider store={store}>
					<TodoList />
				</Provider>
			</div>
		);
	}
}

export default App;
