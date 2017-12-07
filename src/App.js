import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import configureStore from "./store/configureStore";

const store = configureStore();

store.subscribe(() => {
	console.log(store.getState());
});

class App extends Component {
	render() {
		return (
			<div className="App">
				<TodoList />
			</div>
		);
	}
}

export default App;
