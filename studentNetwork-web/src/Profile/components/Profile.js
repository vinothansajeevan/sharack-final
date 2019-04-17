import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import * as AuthActions from '../../Main/action'
import {bindActionCreators} from 'redux'
import {t} from 'typy';
import Modal from 'react-modal'

import create from './create'
import {browserHistory} from "react-router";



function modalStyle(w, h) {
    w = w || 50;
    return {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: w + '%',
            height: h + '%',
            border: '1px solid #192077'
        }
    };
};
class profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postModal: false
        }
    }
    componentDidMount() {
        this.props.fetchUser();
    }
    postModal() {
       browserHistory.push('/create')

        // this.setState({postModal: boolean})
    }

    render() {
        let {authReducer} = this.props;
let shopowner = Object.values(t(authReducer, 'userList').safeObject)
    .filter(a =>  a.product);
        console.log(shopowner, 'shopowner');

        console.log(authReducer, 'authReducer');
        return (
                   <div className="container"  style={{marginLeft:180, marginTop:100}} >
    <h1 style={{marginLeft:30}}>Shop Owner's Dashboard</h1>

        <table className="table table-bordered btn-primary"   style={{marginLeft:30,width:1000}}>

                    <thead>
                    <tr>
                        <th>Distributor Name</th>
                        <th>Product</th>
                        <th>Email</th>
                        <th>Company Name</th>
                        <th>City</th>
                        <th>Contact Number</th>
                    </tr>
                    </thead>

                    {

                        Object.values(t(authReducer, 'userList').safeObject)
                            .filter(a =>  a.product)
                            .map((a) => {
                                    return <tbody>
                                    <tr>
                                        <td>{a.ownerName}</td>
                                        <td>{a.product}</td>
                                        <td>{a.email}</td>
                                        <td>{a.companyName}</td>
                                        <td>{a.city}</td>
                                        <td>{a.contactNumber}</td>

                                        < button className="btn btn-danger" style={{marginLeft:50}} onClick={this.postModal.bind(this,a._id)}>Book</button>

                                            </tr>
                                    </tbody>


                                }
                            )
                    }
                </table>
                {/*<Modal*/}
                    {/*isOpen={this.state.postModal}*/}
                    {/*onRequestClose={this.postModal.bind(this, false)}*/}
                    {/*style={modalStyle(50, 50)}*/}
                    {/*contentLabel="Example Modal"*/}
                    {/*shouldCloseOnOverlayClick={false}*/}
                    {/*ariaHideApp={false}*/}
                {/*>*/}
                    {/*<div>*/}
                   {/*<create/>*/}
                    {/*</div>*/}
                {/*</Modal>*/}
            </div>

        )
    }
}

profile.propTypes = {
    fetchUser: PropTypes.func.isRequired,
};


function mapStateToProps(state) {
    return {
        authReducer: state.authReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(AuthActions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(profile)

