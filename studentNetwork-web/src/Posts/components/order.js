import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import * as PostActions from '../actions'
import {bindActionCreators} from 'redux'
import {t} from 'typy';

import {browserHistory} from "react-router";


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
            <div className="container">
                <br/><br/><br/><br/><br/>
                <table className="table table-bordered"  style={{marginLeft:83}}>

                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Shop Category</th>
                        <th>quantity</th>
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

