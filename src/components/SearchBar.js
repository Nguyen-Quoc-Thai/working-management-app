import React, { Component } from 'react';

export default class DataTable extends Component {
	render() {
		return (
			<div>
				<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 pd-r-0">
                    <br/>
                    <input type="text" className="form-control" placeholder = "Enter key word" required="required"/>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 pd-l-0">
                    <br/>
                    <button type="button" className="btn btn-primary">Find</button>
                </div>    
			</div>
		);
	}
}
