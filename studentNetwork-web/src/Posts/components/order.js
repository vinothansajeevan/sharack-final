import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import * as PostActions from '../actions'
import {bindActionCreators} from 'redux'
import {t} from 'typy';

import {browserHistory} from "react-router";
require('./app.scss');

class order extends Component {

    componentDidMount() {
        this.props.fetchPost();
    }
    postModal() {
        browserHistory.push('/create')

        // this.setState({postModal: boolean})
    }

    render() {
        let {postReducer} = this.props;


        return (
            <div className="container" style={{marginTop:80}}>
                <h1 style={{marginLeft:150}}>Distributor's Dashboard</h1>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<table className="table table-bordered btn-primary"  style={{marginLeft:150,width:1000,marginTop:-10}}>

                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Shop Category</th>
                        <th>Quantity</th>
                    </tr>
                    </thead>

                    {
                        Object.values(t(postReducer, 'postList').safeObject)
                            .map((a) => {
                                    return <tbody>
                                    <tr>
                                        <td>{a.product}</td>
                                        <td>{a.shopCategory}</td>
                                        <td>{a.quantity}</td>

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

order.propTypes = {
    fetchPost: PropTypes.func.isRequired,
};


function mapStateToProps(state) {
    return {
        postReducer: state.postReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(PostActions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(order)

