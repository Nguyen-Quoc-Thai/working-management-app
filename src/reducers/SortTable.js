import * as types from './../constants/ActionTypes';

var initialState = {
	by: 'name',
	value: 1
};

var myReducer = (state = initialState, action) => {
	switch(action.type){
		case types.SORT_TABLE: {

			state.by = action.sort.by;
			state.value = parseInt(action.sort.value);

			return state;
		}
		

		default: 
			return state;
	}
	return state;
}

export default myReducer;