import React, { Component } from 'react';
import DataItem from './DataItem';

import { connect } from 'react-redux';
import * as actions from './../actions/index';

class DataTable extends Component {

	onChange = (event) => {
		var target = event.target;
		var name = target.name;
		var value = target.value;

		this.props.onFilterTable(
			name === 'filterName' ? value : this.props.FilterTable.filterName,
			name === 'filterStatus' ? value : this.props.FilterTable.filterStatus
		);
	}

	render() {

		var { tasks, FilterTable, Search, SortTable } = this.props;

		// Get DB from Local
        tasks = JSON.parse(localStorage.getItem('tasks'));

        // Filter Table before Render (If oke) (Filter Name and Filter Status) 
		if(FilterTable){

            if(FilterTable.filterName){
                tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(FilterTable.filterName.toLowerCase()) !== -1;
                })
            }

            tasks = tasks.filter((task) => {

                if(FilterTable.filterStatus !== -1){ 
                    return (task.status === true ? 0 : 1) === FilterTable.filterStatus;   
                }

                return task;
            })
        }

        // Search table before Render  (If oke)
		if(Search){

            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(Search.toLowerCase()) !== -1;
            })
    	}


    	// Sort table before Render  (If oke)
		if(SortTable.by === 'name'){

            tasks.sort((task1, task2) => {
                if(task1.name > task2.name) {
                    return parseInt(SortTable.value);  
                }else if(task1.name < task2.name) {
                    return -parseInt(SortTable.value);  
                }else return 0;
            });
        }else{

            tasks.sort((task1, task2) => {
                if(task1.status > task2.status) {
                    return -parseInt(SortTable.value);  
                }else if(task1.status < task2.status) {
                    return parseInt(SortTable.value);  
                }else return 0;
            });
        }


        // Render task item
		var elementTasks = tasks.map((task, index) => {
			return <DataItem 
						key={ task.id } 
						index={ index } 
						task={ task }
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
	                            	value={SortTable.filterName}
	                            	onChange={this.onChange}
	                             />
	                        </td>
	                        <td>
	                            <select
	                            	id="input" 
	                            	className="form-control"
	                            	name="filterStatus"
	                            	value={SortTable.filterStatus}
	                            	onChange={this.onChange}
	                            >
	                                <option value={-1}>All</option>
	                                <option value={0}>Active</option>
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

const mapStateToProps = (state) => {
	return {
		tasks: state.tasks,
		FilterTable: state.FilterTable,
		Search: state.Search,
		SortTable: state.SortTable,
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onFilterTable: (filterName, filterStatus) => {
			dispatch(actions.filterTable(filterName, filterStatus));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);