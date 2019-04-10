import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import * as PostActions from '../actions'
import {bindActionCreators} from 'redux'
import {t} from 'typy';
import RecipeReviewCard from './ContentCard'
import Modal from 'react-modal'
import {createUser} from "../../Main/action";
import {browserHistory} from "react-router";
import {Auth} from "../../Auth";

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

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postModal: false
        }
    }

    componentDidMount() {
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
        post.published = true;

        this.props.mutatePost(post);
        this.setState({postModal: false})
    }

    logOut() {
        Auth.deAuthenticateUser();
        browserHistory.push('/');
        window.location.reload()
    }
go(){
    browserHistory.push('/profile')
}
    render() {
        let {postReducer} = this.props;
        let postReq = postReducer.postReq;
        return (
            <div className="container-fluid">

                <div className="row" style={{paddingTop: 50}}>
                    <div className="col-md-1 col-md-offset-9">
                        {/*<button type="button" className="btn btn-info" onClick={this.postModal.bind(this, true)}*/}
                                {/*style={{marginRight: 200}}>Post*/}
                        {/*</button>*/}
                    </div>
                    <div className="col-md-1">
                        <button type="button" className="btn btn-danger" onClick={this.logOut.bind(this)}
                                style={{marginRight: 100}}>Logout
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 col-md-offset-2">
                        {/*{*/}
                            {/*Object.values(t(postReducer, 'postList').safeObject)*/}
                                {/*.map(postReducer => {*/}
                                        {/*return <RecipeReviewCard postReducer={postReducer}/>*/}

                                    {/*}*/}
                                {/*)*/}


                        {/*}*/}
                        <div className="panel panel-default" style={{marginTop:30}} onClick={this.go.bind(this)}>
                            <div className="panel-heading">Food cities Item</div>
                            <div className="panel-body" >GO</div>
                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={this.state.postModal}
                    onRequestClose={this.postModal.bind(this, false)}
                    style={modalStyle(50, 50)}
                    contentLabel="Example Modal"
                    shouldCloseOnOverlayClick={false}
                    ariaHideApp={false}
                >
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
                </Modal>
            </div>
        )
    }
}

Post.propTypes = {
    fetchPost: PropTypes.func.isRequired,
    mutatePost: PropTypes.func.isRequired,
    setPost: PropTypes.func.isRequired,
};


function mapStateToProps(state) {
    return {
        postReducer: state.postReducer,
        authReducer: state.authReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(PostActions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)
(Post)

