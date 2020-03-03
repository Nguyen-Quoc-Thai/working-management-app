import React, { Component } from 'react';

class BtnAddForm extends Component {

	onClickAddFormBtn = () =>{
		this.props.onClickAddFormBtn();
	}



	render() {
		return (
			<div>
                <button type="button" className="btn btn-primary btn-add" onClick={this.onClickAddFormBtn}>ADD Working</button>
			</div>
		);
	}
}


export default BtnAddForm;