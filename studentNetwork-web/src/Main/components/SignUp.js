import React, {Component} from "react";
import {browserHistory} from "react-router";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as AuthActions from "../action";
import {Auth} from "../../Auth";

require('bootstrap/dist/css/bootstrap.min.css');
require('./Login.scss');


 class SignUp extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             loginModal: false,
//
//         }
//     }
//     componentDidMount() {
//         this.props.login()
//     }
//
    handleChange(event) {
        const field = event.target.name;
        const inputs = this.props.authReducer.userReq;
        inputs[field] = event.target.value;
this.props.setUser(inputs)

    }
    handleLogin(){
    let variables = {...this.props.authReducer.userReq};
    this.props.mutateUser(variables);
        // console.log('var',this.props.authReducer.userMutateState);
        browserHistory.push('/')


    }
//
//     componentWillReceiveProps(nextProps, nextContext) {
//         if(this.props.authReducer.MutateState === 1 && nextProps.authReducer.MutateState === 2) {
//             Auth.authenticateUser(nextProps.authReducer.login.token);
//
//         }
//     }
//
//     signinPage() {
//         browserHistory.push('/')
//     }

    render() {
        const inputs = this.props.authReducer.userReq;
        return (
            <div className="container-fluid">

                <div className="row">
                    <div className="col-xs-12">
                        <div className="col-xs-12 col-sm-2 main-title main-mobile">STN
                        <div className="motto">Towards a Learning society</div>
                        </div>
                        <div className="col-sm-5">
                            <div className="col-xs-12 login-padSignUp">


                                <div>
                                    <h4 className="text-center"><b>Register</b></h4>
                                    <div className="col-xs-12">
                                        <div className="group ">
                                           <label>
                                                User Name
                                            </label>
                                            <input type="text" name="ownerName" value={inputs.ownerName}
                                                   onChange={this.handleChange.bind(this)}/>

                                        </div>
                                    </div>
                                    <div className="col-xs-12    ">
                                        <div className="group ">
                                            <label>
                                               Email
                                            </label>
                                            <input type="text" name="email" value={inputs.email}
                                                   onChange={this.handleChange.bind(this)}/>

                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="group">
                                            <label>
                                                Contact Number
                                            </label>
                                            <input type="text" name="contactNumber" value={inputs.contactNumber}
                                                   onChange={this.handleChange.bind(this)}/>

                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="group">
                                            <label>
                                                Register Number
                                            </label>
                                            <input type="text" name="registerNumber" value={inputs.registerNumber}
                                                   onChange={this.handleChange.bind(this)}/>

                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="group">
                                            <label>
                                                Comapany Name
                                            </label>
                                            <input type="text" name="companyName" value={inputs.companyName}
                                                   onChange={this.handleChange.bind(this)}/>

                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="group">
                                            <label>
                                                City
                                            </label>
                                            <input type="text" name="city" value={inputs.city}
                                                   onChange={this.handleChange.bind(this)}/>

                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="group">
                                            <label>
                                                Password
                                            </label>
                                            <input type="password" name="password" value={inputs.password}
                                                   onChange={this.handleChange.bind(this)}/>

                                        </div>
                                    </div>
                                    {/*{this.err.bind(this) &&*/}

                                    {/*<div className="col-xs-12">*/}
                                    {/*<div className="alert alert-danger">*/}
                                    {/*<strong>Fill the required field</strong>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}
                                    {/*}*/}

                                    <div>
                                        <div className="col-xs-6 col-sm-6 col-sm-offset-3">
                                            <button className='login-btn' onClick={this.handleLogin.bind(this)}>Register</button>
                                        </div>
                                        <div className="col-xs-6 col-sm-6">

                                        </div>
                                        {/*<div className="col-md-12 grey pad link">*/}
                                            {/*If you are already User?<span*/}
                                            {/*// onClick={this.signinPage.bind(this)}>SIGN IN</span>*/}

                                        {/*</div>*/}
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 footer">Copyright © 2018 Student Network Systems Inc.</div>
                </div>

            </div>
        )
    }
}

SignUp.propTypes = {
    mutateUser: PropTypes.func.isRequired,
    setUser:PropTypes.func.isRequired,
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
)
(SignUp)