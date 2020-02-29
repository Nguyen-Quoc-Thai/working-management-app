import React, { Component } from 'react';

export default class DataItem extends Component {
	render() {
		return (
			<tr>
                <td>1</td>
                <td>
                    Task title
                </td>
                <td>
                    <span className="label label-danger align">DeAvtive</span>
                </td>
                <td>
                    <button className="align-item" type="button" className="btn btn-warning mr-2">Update</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
		);
	}
}
