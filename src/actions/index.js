import * as types  from './../constants/ActionTypes';

export const listAll = () => {
	return {
		type: types.LIST_ALL
	}
};

export const addTask = (task) => {
	return {
		type: types.ADD_TASK,
		task
	}
};

export const btnAdd = () => {
	return {
		type: types.BTN_ADD
	}
};

export const panelClose = () => {
	return {
		type: types.PANEL_CLOSE
	}
}

export const toggleStatus = (id) => {
	return {
		type: types.TOGGLE_STATUS,
		id
	}
}

export const delTask = (id) => {
	return {
		type: types.DEL_TASK,
		id
	}
}

export const editTask = (task) => {
	return {
		type: types.EDIT_TASK,
		task
	}
}

export const resetFormAdd = () => {
	return {
		type: types.RESET_FORM
	}
}