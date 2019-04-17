import React, {Component} from 'react';
// import {connect} from 'react-redux';
import {browserHistory} from "react-router";
import {Auth} from '../Auth'

require('./app.scss');

export default class App extends Component {

    goNextTab(tabName) {
        browserHistory.push('/'+tabName)
    }



    render() {
        return (
            <div className="container">
                <div className="col-md-2">
                    <div className="sidenav">
                        <div className="iconStyle" onClick={this.goNextTab.bind(this,'order')}>
                            <i className="glyphicon glyphicon-th-list" data-toggle="tooltip" data-placement="right"
                               title="Profile"></i>
                        </div>
                        <div className="iconStyle" onClick={this.goNextTab.bind(this,'post')}>
                            <i className="fa fa-eye" data-toggle="tooltip" data-placement="right" title="View"></i>
                        </div>
                        <div className="iconStyle" onClick={this.goNextTab.bind(this,'create')}>
                            <i className="fa fa-cloud-upload" data-toggle="tooltip" data-placement="right"
                               title="Upload"></i>
                        </div>

                    </div>



                </div>
            </div>
        )

    }
}
