import * as types from './../constants/ActionTypes';

var initialState = false;

var myReducer = (state = initialState, action) => {

	switch(action.type){
	
		case types.BTN_ADD: {
			if(state === false){
				state = true;
			}

			return state;
		}

		case types.PANEL_CLOSE: {
			state = false;
			return state;
		}

		case types.BTN_UPDATE: {
			state = true;
			return state;
		}

		default: return state;
	}
	
	return state;
}

export default myReducer;