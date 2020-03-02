import React, { Component } from 'react';
import DataItem from './DataItem';

export default class DataTable extends Component {

	constructor(props){
		super(props);
		this.state = {
			filterName: '', 
			filterStatus: '-1'
		}
	}

	onChange = (event) => {
		var target = event.target;
		var name = target.name;
		var value = target.value;

		this.setState({
			[name]:value
		});

		this.props.onFilter(
			name === 'filterName' ? value : this.state.filterName,
			name === 'filterStatus' ? value : this.state.filterStatus);
	}

	render() {

		var { tasks } =  this.props; // var tasks = this.props.tasks;

		var elementTasks = tasks.map((task, index) => {
			return <DataItem 
						key={ task.id } 
						index={ index } 
						task={ task }
						onChangeStatus={ this.props.onChangeStatus }
						onDeleteItem={ this.props.onDeleteItem }
						onUpdateItem={ this.props.onUpdateItem }

					/>
		});

		return (
			<div>
				<br/>
	            <br/>
	            <table className="table table-hover">
	                <thead className="align-header-table">
	                    <tr>
	                        <th>STT</th>
	                        <th>Name</th>
	                        <th>Status</th>
	                        <th>Task</th>
	                    </tr>
	                </thead>
	                <tbody>
	                    <tr className="he-header">
	                        <td></td>
	                        <td>
	                            <input 
	                            	type="text"
	                            	className="form-control he-30" 
	                            	placeholder="Filter name"
	                            	name="filterName"
	                            	value={this.state.filterName}
	                            	onChange={this.onChange}
	                             />
	                        </td>
	                        <td>
	                            <select
	                            	id="input" 
	                            	className="form-control"
	                            	name="filterStatus"
	                            	value={this.state.filterStatus}
	                            	onChange={this.onChange}
	                            >
	                                <option value={-1}>All</option>
	                                <option value={0}>Avtive</option>
	                                <option value={1}>DeActive</option>
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
