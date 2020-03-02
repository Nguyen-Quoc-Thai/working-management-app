import React, { Component } from 'react';

export default class DataTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            sort: {
                by: '',
                value: 0
            }            
        }
    }

    onSortTable = (sortName, sortValue) => {
        this.setState({
            sort: {
                by: sortName,
                value: sortValue
            }
        });

        this.props.onSortTable(sortName, sortValue);
    }

	render() {

        var { sort } = this.state;

		return (
			<div>
				<br/>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle he-30" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <a 
                            className={(sort.by==="name" && sort.value === 1 ? "dropdown-item selected" : "dropdown-item")} 
                            onClick={() => {this.onSortTable('name', 1)}}

                        >Name A-Z</a>
                        <a 
                            className={(sort.by==="name" && sort.value === -1 ? "dropdown-item selected" : "dropdown-item")} 
                            onClick={() => {this.onSortTable('name', -1)}}

                        >Name Z-A</a>
                        
                        <hr/>
                        <a 
                            className={(sort.by==="status" && sort.value === 1 ? "dropdown-item selected" : "dropdown-item")} 
                            onClick={() => {this.onSortTable('status', 1)}}

                        >Status Active</a>
                        <a 
                            className={(sort.by==="status" && sort.value === -1 ? "dropdown-item selected" : "dropdown-item")} 
                            onClick={() => {this.onSortTable('status', -1)}}

                        >Status DeActive</a>
                    </div>
                </div>
			</div>
		);
	}
}
