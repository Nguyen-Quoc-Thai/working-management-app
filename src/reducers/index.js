import { combineReducers } from 'redux';
import tasks from './tasks';
import DisplayForm from './DisplayForm';
import TaskEditing from './TaskEditing';
import FilterTable from './FilterTable';
import Search from './Search';
import SortTable from './SortTable';

const myReducer = combineReducers({
	tasks,
	DisplayForm,
	TaskEditing,
	FilterTable,
	Search,
	SortTable
});

export default myReducer;