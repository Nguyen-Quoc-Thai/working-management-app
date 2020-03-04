import React, { Component } from 'react';

import * as actions from './../actions/index';
import { connect } from 'react-redux';

class BtnAddForm extends Component {

	onClickAddFormBtn = () =>{
		this.props.resetFormAdd();
		this.props.onClickBtnAdd();
	}



	render() {
		return (
			<div>
                <button type="button" className="btn btn-primary btn-add" onClick={this.onClickAddFormBtn}>ADD Working</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onClickBtnAdd: () => {
			dispatch(actions.btnAdd());
		},
		resetFormAdd: () => {
			dispatch(actions.resetFormAdd());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BtnAddForm);