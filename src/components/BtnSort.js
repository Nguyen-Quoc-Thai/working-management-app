import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from './../actions/index';

class BtnSort extends Component {

    onSortTable = (sortName, sortValue) => { 

        this.props.onSortTable(sortName, sortValue);
    }

	render() {

        var { SortTable } = this.props;

		return (
			<div>
				<br/>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle he-30" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <a 
                            className={(SortTable.by==="name" && SortTable.value === 1) ? "dropdown-item sort-item-selected" : "dropdown-item"} 
                            onClick={() => {this.onSortTable('name', 1)}}

                        >Name A-Z</a>
                        <a 
                            className={(SortTable.by==="name" && SortTable.value === -1) ? "dropdown-item sort-item-selected" : "dropdown-item"} 
                            onClick={() => {this.onSortTable('name', -1)}}

                        >Name Z-A</a>
                        
                        <hr/>
                        <a 
                            className={(SortTable.by==="status" && SortTable.value === 1) ? "dropdown-item sort-item-selected" : "dropdown-item"} 
                            onClick={() => {this.onSortTable('status', 1)}}

                        >Status Active</a>
                        <a 
                            className={(SortTable.by==="status" && SortTable.value === -1) ? "dropdown-item sort-item-selected" : "dropdown-item"} 
                            onClick={() => {this.onSortTable('status', -1)}}

                        >Status DeActive</a>
                    </div>
                </div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        SortTable: state.SortTable
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSortTable: (by, value) => {
            dispatch(actions.sortTable(by, value));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BtnSort);