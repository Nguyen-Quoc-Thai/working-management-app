import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from './../actions/index';

class DataTable extends Component {

	onBtnAdd = () =>{
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

const mapStateToProps = (state) => {
	return {

	}
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		onBtnAdd: {
			dispatch(actions.btnAdd());
		}
	}
};

export default connect(mapStateToProps, null)(DataTable);