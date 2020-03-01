import React, { Component } from 'react';

export default class FormAdd extends Component {

    onClickAddFormTitle = () =>{
        this.props.onClickAddFormTitle();
    }

	render() {
		return (
			<div>
				<div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title" onClick={ this.onClickAddFormTitle }>
                        ADD Working
                        </h3>
                    </div>
                    <div className="panel-body">
                        <label>
                            <span className="label label-info">Name</span>
                        </label>
                        <input type="text" className="form-control"/>
                        <br/>
                        <label>
                            <span className="label label-info">Status</span>
                        </label>
                        <select className="form-control">
                            <option>Active</option>
                            <option>DeActive</option>
                        </select>
                        <br/>
                        <button type="button" className="btn btn-success mr-2">Save</button>
                        <button type="button" className="btn btn-warning">Cancel</button>
                    </div>
                </div>
			</div>
		);
	}
}
