import React, { Component } from 'react';

export default class DataTable extends Component {
	render() {
		return (
			<div>
				<br/>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sorted
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <a className="dropdown-item" href="#">Name A-Z</a>
                        <a className="dropdown-item" href="#">Name Z-A</a>
                        <hr/>
                        <a className="dropdown-item" href="#">Status Active</a>
                        <a className="dropdown-item" href="#">Status DeActive</a>
                    </div>
                </div>
			</div>
		);
	}
}
