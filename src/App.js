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
                formAddActive: true
            };
    }

    componentWillMount(){
        if(localStorage && localStorage.getItem('tasks')){
            this.setState({
                tasks: JSON.parse(localStorage.getItem('tasks'))
            });
        }
    }

    onGenerateData = () => {
        var tasks = [
            {
                id: this.generateID(),
                name: "An",
                status: true
            },
            {
                id: this.generateID(),
                name: "Ngu",
                status: false
            },
            {
                id: this.generateID(),
                name: "Code",
                status: true
            }
        ];

        this.setState({
            tasks : tasks
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    generateID(){
        return this.rdS() + '-' + this.rdS() + this.rdS() + "-" + this.rdS() + "-" + this.rdS() + this.rdS() + this.rdS();
    }

    rdS(){ // generate random string
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
    }

    onClickAddFormTitle = () =>{
        this.setState({
            formAddActive : false
        });
    }
    
    onClickAddFormBtn = () =>{
        this.setState({
            formAddActive : !this.state.formAddActive
        });
    }

    onSubmit = (item) => {
        var { tasks } = this.state;
        item.id = this.generateID();
        tasks.push(item);
        this.setState({
            tasks:tasks
        })

        localStorage.setItem('tasks',JSON.stringify(tasks));

        console.log(this.state);
    }
    render() {

        var formAdd = this.state.formAddActive ? <FormAdd onClickAddFormTitle={ this.onClickAddFormTitle } onSubmit={this.onSubmit}/>:<div></div>;

        return (
            <div>
                <div className="container">
                    <h1 className="header-style">Working Management</h1>
                    <div className="row">
                        <div className={this.state.formAddActive ? "col-xs-4 col-sm-4 col-md-4 col-lg-4":""}>
                            { formAdd }
                        </div>
                        <div className={this.state.formAddActive ? "col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <BtnAddForm onClickAddFormBtn={this.onClickAddFormBtn}/>
                                    <button type="button" className="btn btn-danger" onClick={ this.onGenerateData }>Gererate DATA</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <SearchBar/>
                                </div>
                                
                                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <BtnSort/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <DataTable tasks={ this.state.tasks }/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
