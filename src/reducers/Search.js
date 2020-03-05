import * as types from './../constants/ActionTypes';

var initialState = {
	searchKeyWord: ''
};

var myReducer = (state = initialState, action) => {
	switch(action.type){

		case types.SEARCH_BAR: {

        	state.searchKeyWord = action.searchKeyWord;

			return state;
		}



		default: 
			return state;
	}
	return state;
}

export default myReducer;