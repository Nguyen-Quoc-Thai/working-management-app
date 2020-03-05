import * as types from './../constants/ActionTypes';

var initialState = '';

var myReducer = (state = initialState, action) => {

	switch(action.type){

		case types.SEARCH_BAR: {

			state = action.regex.searchKeyWord;

        	return action.regex.searchKeyWord;
		}

		default: 
			return state;
	}

	return state;
}

export default myReducer;