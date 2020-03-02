import React, { Component } from 'react';
import './App.css';

import FormAdd from './components/FormAdd';
import BtnAddForm from './components/BtnAddForm';
import SearchBar from './components/SearchBar';
import BtnSort from './components/BtnSort';
import DataTable from './components/DataTable';


export default class App extends Component {
    
    constructor(props){
            super(props);
            this.state = {
                tasks : [], // id, name, status
                formAddActive: false,
                taskEditing: null,
                filter: {
                    name: '',
                    status: -1
                },
                searchKeyWord: '',
                sort: {
                    by: '',
                    value: 0
                }
            };
    }

    componentWillMount(){
        if(localStorage && localStorage.getItem('tasks')){
            this.setState({
                tasks: JSON.parse(localStorage.getItem('tasks'))
            });
        }
    }

    generateID(){
        return this.rdS() + '-' + this.rdS() + this.rdS() + "-" + this.rdS() + "-" + this.rdS() + this.rdS() + this.rdS();
    }

    rdS(){ // generate random string
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
    }

    onClickAddFormTitle = () =>{
        this.setState({
            formAddActive : false,
        });
    }
    
    onClickAddFormBtn = () =>{
        if(this.state.formAddActive){
            this.setState({
                taskEditing: null
            });
        }else{
            this.setState({
                formAddActive : true,
                taskEditing: null
            });
        }
    }

    onSubmit = (item) => {
        var { tasks } = this.state;

        if(item.status === "true"){
            item.status = true;
        }else{
            item.status = false;
        }

        this.setState({
            formAddActive: false
        });

        if(item && item.id===''){
            item.id = this.generateID();
            tasks.push(item);    
        }else{
            var indexOfID = this.findIndexOfID(item.id);
            tasks[indexOfID] = item;
        }
        
        this.setState({
            tasks:tasks
        })

        localStorage.setItem('tasks',JSON.stringify(tasks));
    }

    onChangeStatus = (id) => {
        var { tasks } = this.state;
        var indexOfID = this.findIndexOfID(id);

        tasks[indexOfID].status = !tasks[indexOfID].status;

        this.setState({
            tasks: tasks
        });

        localStorage.setItem('tasks',JSON.stringify(tasks));    
    }

    findIndexOfID = (id) => {
        var { tasks } = this.state;
        for (let i=0; i<tasks.length; i++) {
            if(tasks[i].id===id){
                return i;
            }
        }

        return -1;
    }

    onDeleteItem = (id) => {
        var { tasks } = this.state;
        var indexOfID = this.findIndexOfID(id);
        
        if(indexOfID!==-1){
            this.onClickAddFormTitle();
            tasks.splice(indexOfID, 1);        

            this.setState({
                tasks: tasks
            });

            localStorage.setItem('tasks',JSON.stringify(tasks));    
        }
        
    }

    onUpdateItem = (id) => {
        var { tasks } = this.state;
        var indexOfID = this.findIndexOfID(id);
        var taskEdit = tasks[indexOfID];

        this.setState({
            taskEditing: taskEdit,
        });

        if(this.state.formAddActive===false){
            this.setState({
                formAddActive: true
            });   
        }
    }

    onFilter = (filterName, filterStatus) => {
        this.setState({
            filter:{
                name: filterName,
                status: parseInt(filterStatus)
            }
        });
    }

    onSearchKeyWord = (data) => {
        this.setState({
            searchKeyWord: data
        });
    }

    onSortTable = (sortName, sortValue) => {
        this.setState({
            sort: {
                by: sortName,
                value: parseInt(sortValue)
            }
        });
    }

    render() {

        var { tasks, formAddActive, taskEditing, filter, searchKeyWord, sort } = this.state; 

        if(sort.by === 'name'){
            tasks.sort((task1, task2) => {
                if(task1.name > task2.name) {
                    return sort.value;  
                }else if(task1.name < task2.name) {
                    return -sort.value;  
                }else return 0;
            });
        }else{
            tasks.sort((task1, task2) => {
                if(task1.status > task2.status) {
                    return -sort.value;  
                }else if(task1.status < task2.status) {
                    return sort.value;  
                }else return 0;
            });
        }

        localStorage.setItem('tasks',JSON.stringify(tasks));

        if(filter){
            if(filter.name){
                tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1;
                })
            }
            tasks = tasks.filter((task) => {
                if(filter.status !== -1){ 
                    return task.status === (filter.status === 1 ? false : true);   
                }
                return task;
            })
        }

        if(searchKeyWord){
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(searchKeyWord.toLowerCase()) !== -1;
            })
        }

        var formAdd = this.state.formAddActive ? <FormAdd 
                                                        onClickAddFormTitle={ this.onClickAddFormTitle } 
                                                        onSubmit={this.onSubmit}
                                                        taskEditing={taskEditing}
                                                    />:<div></div>;

        return (
            <div>
                <div className="container">
                    <h1 className="header-style">Working Management</h1>
                    <div className="row">
                        <div className={formAddActive ? "col-xs-4 col-sm-4 col-md-4 col-lg-4":""}>
                            { formAdd }
                        </div>
                        <div className={formAddActive ? "col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <BtnAddForm onClickAddFormBtn={this.onClickAddFormBtn}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <SearchBar onSearchKeyWord = { this.onSearchKeyWord }/>
                                </div>
                                
                                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <BtnSort onSortTable={ this.onSortTable }/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <DataTable 
                                        tasks={ tasks } 
                                        onChangeStatus={this.onChangeStatus}
                                        onDeleteItem={this.onDeleteItem}
                                        onUpdateItem={this.onUpdateItem}
                                        onFilter={this.onFilter}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
