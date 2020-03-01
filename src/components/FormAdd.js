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
        var taskEditing = this.props.taskEditing;

        if(taskEditing){
            this.setState({
                id: taskEditing.id,
                name: taskEditing.name,
                status: taskEditing.status
            });
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.taskEditing){
            this.setState({
                id: nextProps.taskEditing.id,
                name: nextProps.taskEditing.name,
                status: nextProps.taskEditing.status
            });
        }else if(nextProps && !nextProps.taskEditing){
            this.setState({
                id: '',
                name: '',
                status: false
            });  
        }
    }

	render() {

        var taskEditing = this.state;

        return (
			<div>
				<div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title" onClick={ this.onClickAddFormTitle }> {taskEditing.id===''?'Add Working':'Update Working'}
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
                                    value={taskEditing.name}
                                    onChange={this.onChange}
                                />
                                <br/>
                                <label>
                                    <span className="label label-info">Status</span>
                                </label>
                                <select 
                                    className="form-control"
                                    name="status"
                                    value={taskEditing.status}
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
