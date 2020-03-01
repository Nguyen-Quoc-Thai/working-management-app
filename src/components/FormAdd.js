import React, { Component } from 'react';

export default class FormAdd extends Component {

    constructor(props){
        super(props);
        this.state={
            id: '',
            name: '',
            status: false
        }
    }

    onClickAddFormTitle = () =>{
        this.props.onClickAddFormTitle();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;

        this.setState({
            [name]: value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    onClear = () => {
        this.props.onClickAddFormTitle();
    }

    componentWillMount(){
        if(this.props.taskEditing){
            this.setState({
                id: this.props.taskEditing.id,
                name: this.props.taskEditing.name,
                status: this.props.taskEditing.status
            })
        }
    }

	render() {

        var element = this.state;

        console.log(element);
		
        return (
			<div>
				<div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title" onClick={ this.onClickAddFormTitle }> {element.id===""?"Add Working":"Update Working"}
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>
                                    <span className="label label-info">Name</span>
                                </label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                                <br/>
                                <label>
                                    <span className="label label-info">Status</span>
                                </label>
                                <select 
                                    className="form-control"
                                    name="status"
                                    value={this.state.status}
                                    onChange={this.onChange}
                                >
                                    <option value={true}>Active</option>
                                    <option value={false}>DeActive</option>
                                </select>
                                <br/>
                            </div>
                        
                            <button type="submit" className="btn btn-success mr-2">Save</button>
                            <button type="button" className="btn btn-warning" onClick={this.onClear}>Cancel</button>
                        </form>
                    </div>
                </div>
			</div>
		);
	}
}
