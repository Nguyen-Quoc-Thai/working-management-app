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

		case types.SAVE_TASK: {

			if(action.task.id === ''){
				var newTask = {
					id: generateID(),
					name: action.task.name,
					status: action.task.status === 'true' ? true : false
				}

				state.push(newTask);

			}else{
				var index = findIndexOfID(action.task.id);

				state[index] = {
					id: {...state[index]}.id,
					name: action.task.name,
					status: action.task.status
				}
			}
			
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

		case types.DEL_TASK: {

			var index = findIndexOfID(action.id);

			state.splice(index, 1);

			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		}

		case types.FILTER_TABLE: {

			var filter = {
				filterName: action.filter.filterName,
				filterStatus: action.filter.filterStatus === '1' ? false : (action.filter.filterStatus === '0') ? true : -1
			}

        	state = JSON.parse(localStorage.getItem('tasks'));

			if(filter){

	            if(filter.filterName){
	                state = state.filter((task) => {
	                    return task.name.toLowerCase().indexOf(filter.filterName.toLowerCase()) !== -1;
	                })
	            }

	            state = state.filter((task) => {

	                if(filter.filterStatus !== -1){ 
	                    return task.status === filter.filterStatus;   
	                }

	                return task;
	            })
	        }
			
			return state;
		}

		case types.SEARCH_BAR: {

        	state = JSON.parse(localStorage.getItem('tasks'));


			if(action.regex){
	            state = state.filter((task) => {
	                return task.name.toLowerCase().indexOf(action.regex.searchKeyWord.toLowerCase()) !== -1;
	            })
        	}

			return state;
		}

		default: 
			return state;
	}
	return state;
}

export default myReducer;