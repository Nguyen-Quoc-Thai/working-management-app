import React, { Component } from 'react';

export default class DataItem extends Component {

    onChangeStatus = () => {
        this.props.onChangeStatus(this.props.task.id);
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
                    <button className="align-item" type="button" className="btn btn-warning mr-2">Update</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
		);
	}
}
