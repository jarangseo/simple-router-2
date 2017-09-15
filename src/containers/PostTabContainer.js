import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as postActions from '../reducers/reducer';

class PostTabContainer extends Component {
    componentDidMount() {
        console.log(this.props);
        this.getPost();
    }

    getPost = async() => {
        const {PostActions} = this.props;

        try {
            await PostActions.getPost(`http://jsonplaceholder.typicode.com/posts`);
            console.log('요청이 완료된 다음에 실행됨')
        } catch (e) {
            console.log('에러가 발생!');
        }
    }

    render() {
        const {post, error, loading} = this.props;

        const postList = post.length > 0 ?
            post.map((item) =>
                <li className="list-group-item" key={item.id}>
                    {item.title}
                </li>
            )
            : `<p> empty </p>`
        return (
            <div id="view" className="tab-content">
                { loading && <h2>로딩중...</h2>}
                { error
                    ? <h1> 에러발생! </h1>
                    : (
                        <div>
                            <h1>Posts</h1>
                            <div>
                                <ul className="list-group">
                                    {postList}
                                </ul>
                            </div>
                        </div>
                    )}
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
)(PostTabContainer);