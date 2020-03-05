import * as types  from './../constants/ActionTypes';


// actions 

// Liệt kê tất cả các Task
export const listAll = () => {
	return {
		type: types.LIST_ALL
	}
};

// Add hoặc Update 1 Task
export const saveTask = (task) => {
	return {
		type: types.SAVE_TASK,
		task
	}
};

// Button Add New Task
export const btnAdd = () => {
	return {
		type: types.BTN_ADD
	}
};

// Click on Panel Form Add or Update Working
export const panelClose = () => {
	return {
		type: types.PANEL_CLOSE
	}
}

// Quick Change status on Table by Click
export const toggleStatus = (id) => {
	return {
		type: types.TOGGLE_STATUS,
		id
	}
}

// BTN Dell task
export const delTask = (id) => {
	return {
		type: types.DEL_TASK,
		id
	}
}

// BTN Update task
export const editTask = (task) => {
	return {
		type: types.EDIT_TASK,
		task
	}
}

// Reset Form Add Working 
export const resetFormAdd = () => {
	return {
		type: types.RESET_FORM
	}
}

// Filter Table (Filter name task and Status)
export const filterTable = (filterName, filterStatus) => {
	return {
		type: types.FILTER_TABLE,
		filter: {
			filterName,
			filterStatus
		}
	}
}

// Search Bar
export const searchBar = (regex) => {
	return {
		type: types.SEARCH_BAR,
		regex
	}
}

// Sort Table
export const sortTable = (by, value) => {
	return {
		type: types.SORT_TABLE,
		sort: {
			by,
			value
		}
	}
}