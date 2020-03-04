import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from './../actions/index';

class DataItem extends Component {

    onChangeStatus = () => {
        this.props.onToggleStatus(this.props.task.id);
    }

    onDeleteItem = () => {
        this.props.onDeleteTask(this.props.task.id);
        this.props.onPanelClose();
    }

    onUpdateItem = () => {
        this.props.onClickBtnAdd();
        this.props.onEditingTask(this.props.task);
    }

	render() {

        var { task, index } = this.props;

		return (
			<tr>
                <td className="al-ct">{ index + 1 }</td>
                <td className="ov-hd">
                    { task.name }
                </td>
                <td className="al-ct">
                    <span className={task.status===true?"label label-success cs-pt":"label label-danger cs-pt"} onClick={ this.onChangeStatus }>{ task.status===true?'Active':'DeActive' }</span>
                </td>
                <td className="al-ct">
                    <button 
                        className="align-item" 
                        type="submit" 
                        className="btn btn-warning mr-2"
                        onClick={ this.onUpdateItem }
                    >
                    Update</button>
                    <button 
                        type="submit" 
                        className="btn btn-danger"
                        onClick={ this.onDeleteItem }
                    >Delete</button>
                </td>
            </tr>
		);
	}
}

const mapStateToProps = (state) => {
    return {

    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleStatus: (id) => {
            dispatch(actions.toggleStatus(id));
        },
        onDeleteTask: (id) => {
            dispatch(actions.delTask(id));
        },
        onPanelClose: () => {
            dispatch(actions.panelClose());
        },
        onClickBtnAdd: () => {
            dispatch(actions.btnAdd());
        },
        onEditingTask: (task) => {
            dispatch(actions.editTask(task));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataItem);
