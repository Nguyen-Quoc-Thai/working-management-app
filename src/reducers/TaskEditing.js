import * as types from './../constants/ActionTypes';

var initialState = {};

var myReducer = (state = initialState, action) => {
	switch(action.type){
		case types.EDIT_TASK: {
			state = action.task;
			return state;
		}
		case types.RESET_FORM: {
			state = {};
			console.log(state);
			return state;
		}

		default: 
			return state;
	}
	return state;
}

export default myReducer;