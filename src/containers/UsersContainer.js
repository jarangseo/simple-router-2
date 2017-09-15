import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as postActions from '../reducers/reducer';
import {Link} from 'react-router-dom';

class UsersContainer extends Component {
    componentDidMount() {
        this.getPost();
    }

    getPost = async() => {
        const {PostActions} = this.props;

        try {
            await PostActions.getPost(`http://jsonplaceholder.typicode.com/users`);
            console.log('요청이 완료된 다음에 실행됨');
        } catch (e) {
            console.log('에러가 발생!');
        }
    }

    render() {
        const {post, match} = this.props;
        const userList = post.length > 0 ?
            post.map((item) =>
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                        <Link to={`${match.url}/${item.id}`} id={item.id}>{item.name}</Link>
                    </td>
                    <td>{item.email}</td>
                </tr>
            )
            : <tr>empty</tr>
        return (
            <div>
                <h1>Users</h1>
                <table className="table table-bordered table-condensed">
                    <colgroup>
                        <col width="50"/>
                        <col/>
                        <col width="200"/>
                    </colgroup>
                        <tbody>
                            {userList}
                        </tbody>
                </table>
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
)(UsersContainer);