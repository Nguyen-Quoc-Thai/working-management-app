import * as types from './../constants/ActionTypes';

var initialState = {
	filterName:'',
	filterStatus: -1
};

var myReducer = (state = initialState, action) => {
	switch(action.type){
		case types.FILTER_TABLE: {

			state.filterName = action.filter.filterName;
			state.filterStatus = parseInt(action.filter.filterStatus);

			return state;
		}


		default: 
			return state;
	}
	return state;
}

export default myReducer;