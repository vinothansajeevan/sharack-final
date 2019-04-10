import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import * as authActions from '../../Main/action'
import {bindActionCreators} from 'redux'
import {t} from 'typy';
import Modal from 'react-modal'

import * as PostActions from "../../Posts/actions";
import {browserHistory} from "react-router";


class create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postModal: false
        }
    }
    componentDidMount() {
        // this.props.fetchUser();
        this.props.fetchPost();
    }
    postModal(boolean) {
        this.setState({postModal: boolean})
    }

    onChange(event) {
        const field = event.target.name;
        let setPost = {...this.props.postReducer.postReq};
        setPost[field] = event.target.value;
        this.props.setPost(setPost);
    }

    postTheContent() {
        let post = {...this.props.postReducer.postReq};
        post.author = //this.props.authReducer.login.userId
            "5ca26dcb16320b3ddbb3ac90";

        this.props.mutatePost(post);
        this.setState({postModal: false})
        browserHistory.push('/order')

    }
    render() {
        let {authReducer} = this.props;
        let {postReq} = this.props.postReducer;

        console.log(authReducer, 'authReducer');
        return (
            <div className="container">


                    <div className="container-fluid">
                        <div className="form-horizontal">
                            <div className="form-group">
                                <label className="col-sm-2 control-label">Product</label>
                                <div className="col-sm-10">
                                    <input onChange={this.onChange.bind(this)} type="text" name="product"
                                           value={postReq.product} className="form-control" placeholder="Grade"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label">Shop Category</label>
                                <div className="col-sm-10">
                                    <input onChange={this.onChange.bind(this)} type="text" name="shopCategory"
                                           value={postReq.shopCategory} className="form-control" placeholder="School"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label">Quantity</label>
                                <div className="col-sm-10">
                                    <input onChange={this.onChange.bind(this)} type="text" name="quantity"
                                           value={postReq.quantity} className="form-control" placeholder="Subject"/>
                                </div>
                            </div>

                            <div className="">
                                <div className="col-sm-offset-3 col-sm-3">
                                    <button className="btn btn-success" onClick={this.postTheContent.bind(this)}>
                                        <b>Create</b></button>
                                </div>

                                <div className="col-sm-offset-1 col-sm-3">
                                    <button className="btn btn-success" onClick={this.postModal.bind(this, false)}>
                                        <b>Close</b></button>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>

        )
    }
}

create.propTypes = {
    mutatePost: PropTypes.func.isRequired,
    setPost: PropTypes.func.isRequired,
};


function mapStateToProps(state) {
    return {
        postReducer: state.postReducer,


    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(PostActions,dispatch)
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(create)

