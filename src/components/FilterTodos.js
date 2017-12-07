import React from "react";
import { connect } from "react-redux";
import { toggleHideCompleted } from "../actions/filters";

const FilterTodos = props => (
	<div>
		<button onClick={() => props.dispatch(toggleHideCompleted())}>
			{props.filters.hideCompleted ? "Show All" : "Hide Completed"}
		</button>
	</div>
);

const mapStateToProps = state => ({
	filters: state.filters
});

export default connect(mapStateToProps)(FilterTodos);
