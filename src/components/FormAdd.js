import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from './../actions/index';
 
class FormAdd extends Component {

    constructor(props){
        super(props);
        this.state={
            id: '',
            name: '',
            status: false
        }
    }

    onClickAddFormTitle = () =>{
        this.props.onPanelClose();
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
        this.props.onSaveTask(this.state);
        this.props.onPanelClose();
    }

    onClear = () => {
        this.props.onPanelClose();
    }

    // componentWillMount(){
    //     var taskEditing = this.props.taskEditing;

    //     if(taskEditing){
    //         this.setState({
    //             id: taskEditing.id,
    //             name: taskEditing.name,
    //             status: taskEditing.status
    //         });
    //     }
    // }

    componentWillReceiveProps(nextProps){   
        if(nextProps && nextProps.TaskEditing){
            this.setState({
                id: nextProps.TaskEditing.id,
                name: nextProps.TaskEditing.name,
                status: nextProps.TaskEditing.status
            });
        }else if(nextProps && !nextProps.TaskEditing){
            this.setState({
                id: '',
                name: '',
                status: false
            });  
        }
    }

	render() {

        var { TaskEditing, DisplayForm } = this.props;

        if(!DisplayForm) return '';

        return (
			<div>
				<div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title" onClick={ this.onClickAddFormTitle }> {TaskEditing.id===''?'Add Working':'Update Working'}
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>
                                    <span className="label label-info ft-size">Name</span>
                                </label>
                                <input 
                                    required
                                    type="text" 
                                    className="form-control mt-5px"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                                <br/>
                                <label>
                                    <span className="label label-info ft-size">Status</span>
                                </label>
                                <select 
                                    className="form-control mt-5px"
                                    name="status"
                                    value={this.state.status}
                                    onChange={this.onChange}
                                >
                                    <option value={true}>Active</option>
                                    <option value={false}>DeActive</option>
                                </select>
                                <br/>
                            </div>
                        
                            <button type="submit" className="btn btn-success mr-2 up-si">Save</button>
                            <button type="button" className="btn btn-warning up-si" onClick={this.onClear}>Cancel</button>
                        </form>
                    </div>
                </div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        DisplayForm: state.DisplayForm,
        TaskEditing: state.TaskEditing
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask: (task) => {
            dispatch(actions.saveTask(task))
        },

        onPanelClose: () => {
            dispatch(actions.panelClose());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAdd);