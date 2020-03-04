import * as types from './../constants/ActionTypes';

var initialState = {
	id: '',
	name: '',
	status: false
};

var myReducer = (state = initialState, action) => {
	switch(action.type){
		case types.EDIT_TASK: {
			state = action.task;
			return state;
		}
		case types.RESET_FORM: {
			state = {
				id: '',
				name: '',
				status: false
			};
			return state;
		}

		default: 
			return state;
	}
	return state;
}

export default myReducer;