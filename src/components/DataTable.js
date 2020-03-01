import React, { Component } from 'react';
import DataItem from './DataItem';

export default class DataTable extends Component {
	render() {

		var { tasks } =  this.props; // var tasks = this.props.tasks;

		var elementTasks = tasks.map((task, index) => {
			return <DataItem 
						key={ task.id } 
						index={ index } 
						task={ task }
						onChangeStatus={ this.props.onChangeStatus }
						onDeleteItem={ this.props.onDeleteItem }
					/>
		});

		return (
			<div>
				<br/>
	            <br/>
	            <table className="table table-hover">
	                <thead>
	                    <tr>
	                        <th>STT</th>
	                        <th>Name</th>
	                        <th>Status</th>
	                        <th>Task</th>
	                    </tr>
	                </thead>
	                <tbody>
	                    <tr>
	                        <td></td>
	                        <td>
	                            <input type="text"className="form-control"/>
	                        </td>
	                        <td>
	                            <select id="input" className="form-control">
	                                <option>All</option>
	                                <option>Avtive</option>
	                                <option>DeActive</option>
	                            </select>
	                        </td>
	                        <td>
	                        </td>
	                    </tr>
	                    { elementTasks }
	                </tbody>
	            </table>
			</div>
		);
	}
}
