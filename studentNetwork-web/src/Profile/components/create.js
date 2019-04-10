import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import * as PostActions from "../../Posts/actions";
import {browserHistory} from "react-router";


class create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postModal: false
        }
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
            "5ca6db2c6a0b1570e2713d84";
        post.published = true;

        this.props.mutatePost(post);
        browserHistory.push('/profile')

    }
    render() {
        let {postReducer} = this.props;
        let postReq = postReducer.postReq;

        return (


            <div className="container" >
            <br/> <br/> <br/>
                    <div className="container-fluid" style={{marginLeft:90}}>
    <h1><b><div>Shop Owner's Needs</div></b></h1>
            <br/>
                        <div className="form-horizontal">
                            <div className="form-group">
                                <label className="col-sm-2 control-label">Product</label>
                                <div className="col-sm-8">
                                    <input onChange={this.onChange.bind(this)} type="text" name="product"
                                           value={postReq.product} className="form-control" placeholder="Name"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label">Shop Category</label>
                                <div className="col-sm-8">
                                    <input onChange={this.onChange.bind(this)} type="text" name="shopCategory"
                                           value={postReq.shopCategory} className="form-control" placeholder="Shop Category"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label">Quantity</label>
                                <div className="col-sm-8">
                                    <input onChange={this.onChange.bind(this)} type="text" name="quantity"
                                           value={postReq.quantity} className="form-control" placeholder="Quantity"/>
                                </div>
                            </div>
<br/>
                            <div className="">

                                <div className="col-sm-offset-3 col-sm-3">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

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

