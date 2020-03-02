import React, { Component } from 'react';

export default class DataTable extends Component {

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
		this.props.onSearchKeyWord(this.state.searchKeyWord);
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
