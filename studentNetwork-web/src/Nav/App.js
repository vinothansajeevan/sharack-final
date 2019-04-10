import React, {Component} from 'react';
// import {connect} from 'react-redux';
import {browserHistory} from "react-router";
import {Auth} from '../Auth'

require('./app.scss');

export default class App extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: '',
            address: ''
        }
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let contact = {
            name: this.state.name,
            address: this.state.address
        };
        this.setState({
            name: ''
        });
        this.setState({
            address: ''
        });
        this.props.createContact(contact);
    }

    listView(data, index) {
        return (

            <div className="row" key={index}>
                <div className="col-md-10">
                    <li key={index} className="list-group-item clearfix">
                        1=> {data.name}
                        2=>{data.address}
                    </li>
                </div>
                <div className="col-md-2">
                    <button onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger">
                        Remove
                    </button>
                </div>
            </div>
        )
    }

    deleteContact(e, index) {
        e.preventDefault();
        this.props.deleteContact(index);
    }

    goNextTab(tabName) {
        browserHistory.push('/'+tabName)
    }



    render() {
        return (
            <div className="container">
                <div className="col-md-2">
                    <div className="sidenav">
                        <div className="iconStyle" onClick={this.goNextTab.bind(this,'order')}>
                            <i className="glyphicon glyphicon-user" data-toggle="tooltip" data-placement="right"
                               title="Profile"></i>
                        </div>
                        <div className="iconStyle" onClick={this.goNextTab.bind(this,'post')}>
                            <i className="fa fa-eye" data-toggle="tooltip" data-placement="right" title="View"></i>
                        </div>
                        <div className="iconStyle" onClick={this.goNextTab.bind(this,'create')}>
                            <i className="fa fa-cloud-upload" data-toggle="tooltip" data-placement="right"
                               title="Upload"></i>
                        </div>

                        <div className="iconStyle">
                            <i className="fa fa-cog" data-toggle="tooltip" data-placement="right" title="Setting"></i>
                        </div>
                    </div>



                </div>
            </div>
        )

    }
}
