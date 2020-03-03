import { combineReducers } from 'redux';
import tasks from './tasks';
import DisplayForm from './DisplayForm';


const myReducer = combineReducers({
	tasks,
	DisplayForm
});

export default myReducer;