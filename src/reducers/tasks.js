import * as types from './../constants/ActionTypes';

var rdS = () => { // generate random string
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
}

var generateID = () => {
    return rdS() + '-' + rdS() + rdS() + "-" + rdS() + "-" + rdS() + rdS() + rdS();
}


var data = JSON.parse(localStorage.getItem('tasks'));

var initialState = data ? data : [];

var findIndexOfID = (id) => {
    var tasks = initialState;
    for (let i=0; i<tasks.length; i++) {
        if(tasks[i].id===id){
            return i;
        }
    }

    return -1;
}

var myReducer = (state = initialState, action) => {
	switch(action.type){
		case types.LIST_ALL: {
			return state;
		}

		case types.ADD_TASK: {

			var newTask = {
				id: generateID(),
				name: action.task.name,
				status: action.task.status === 'true' ? true : false
			}

			state.push(newTask);

			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		}

		case types.TOGGLE_STATUS: {

			var index = findIndexOfID(action.id);

			state[index] = {
				id: {...state[index]}.id,
				name: {...state[index]}.name,
				status: !{...state[index]}.status
			}

			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		}

		default: 
			return state;
	}
	return state;
}

export default myReducer;