import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from './../actions/index';

class SearchBar extends Component {

	constructor(props){
		super(props);
		this.state = {
			searchKeyWord: ''
		}
	}

	onChange = (event) =>{
		var target = event.target;
		var name = target.name;
		var value = target.value;

		this.setState({
			[name]:value
		});
	}

	onSearchKeyWord = () => {
		
		this.props.onSearchBar(this.state);
	}

	render() {

		return (
			<div>
				<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 pd-r-0">
                    <br/>
                    <input 
                    	type="text" 
                    	className="form-control he-30" 
                    	placeholder = "Enter key word..." 
                    	required="required"
                    	name="searchKeyWord"
                    	value={ this.state.searchKeyWord }
                    	onChange={ this.onChange }
                    />
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 pd-l-0">
                    <br/>
                    <button 
                    	type="button" 
                    	className="btn btn-primary he-30"
                    	onClick={ this.onSearchKeyWord }
                    >Find</button>
                </div>    
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onSearchBar: (regex) => {
			dispatch(actions.searchBar(regex));
		}
	}
}

export default connect(null, mapDispatchToProps)(SearchBar);