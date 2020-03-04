import { combineReducers } from 'redux';
import tasks from './tasks';
import DisplayForm from './DisplayForm';
import TaskEditing from './TaskEditing';
import SortTable from './SortTable';

const myReducer = combineReducers({
	tasks,
	DisplayForm,
	TaskEditing,
	SortTable
});

export default myReducer;