import { combineReducers } from 'redux';
import tasks from './tasks';
import DisplayForm from './DisplayForm';
import TaskEditing from './TaskEditing';


const myReducer = combineReducers({
	tasks,
	DisplayForm,
	TaskEditing
});

export default myReducer;