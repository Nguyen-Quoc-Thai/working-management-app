import React, { Component } from 'react';
import './App.css';

import FormAdd from './components/FormAdd';
import BtnAddForm from './components/BtnAddForm';
import SearchBar from './components/SearchBar';
import BtnSort from './components/BtnSort';
import DataTable from './components/DataTable';


export default class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="header-style">Working Management</h1>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <FormAdd/>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <BtnAddForm/>
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
                                <DataTable/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
