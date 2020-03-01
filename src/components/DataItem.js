import React, { Component } from 'react';

export default class DataItem extends Component {

    onChangeStatus = () => {
        this.props.onChangeStatus(this.props.task.id);
    }

    onDeleteItem = () => {
        this.props.onDeleteItem(this.props.task.id);
    }

    onUpdateItem = () => {
        this.props.onUpdateItem(this.props.task.id);
    }

	render() {

        var { task, index } = this.props;

		return (
			<tr>
                <td>{ index + 1 }</td>
                <td>
                    { task.name }
                </td>
                <td>
                    <span className={task.status===true?"label label-success align":"label label-danger align"} onClick={ this.onChangeStatus }>{ task.status===true?'Avtive':'DeAvtive' }</span>
                </td>
                <td>
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
