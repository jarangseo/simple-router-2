import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as postActions from '../reducers/reducer';

class UserContainer extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.getPost(id);
    }

    goback() {
        console.log('e');
        window.history.back();
    }

    getPost = async(userId) => {
        const {PostActions} = this.props;

        try {
            await PostActions.getPost(`http://jsonplaceholder.typicode.com/users/${userId}`);
            console.log('요청이 완료된 다음에 실행됨')
        } catch (e) {
            console.log('에러가 발생!');
        }
    }

    render() {
        const {post} = this.props;

        return (
            <div>
                <h1>User</h1>
                <table className="table table-bordered table-condensed">
                    <colgroup>
                        <col width="100"/>
                        <col/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>name</th>
                            <td>{post.name}</td>
                        </tr>
                        <tr>
                            <th>e-mail</th>
                            <td>{post.email}</td>
                        </tr>
                        <tr>
                            <th>phone</th>
                            <td>{post.phone}</td>
                        </tr>
                        <tr>
                            <th>website</th>
                            <td>{post.website}</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    <button type="button" className="btn btn-primary btn-block" onClick={this.goback}>Users List</button>
                </p>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        post: state.pagereducer.data,
        loading: state.pender.pending['GET_POST'],
        error: state.pender.failure['GET_POST']
    }),
    (dispatch) => ({
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(UserContainer);