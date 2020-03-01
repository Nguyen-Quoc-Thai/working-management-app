import React, { Component } from 'react';

export default class DataTable extends Component {

	onClickAddFormBtn = () =>{
		this.props.onClickAddFormBtn();
	}

	render() {
		return (
			<div>
                <button type="button" className="btn btn-primary" onClick={this.onClickAddFormBtn}>ADD Working</button>
			</div>
		);
	}
}
