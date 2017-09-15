import {createAction, handleActions} from 'redux-actions';
import {pender} from 'redux-pender';

import axios from 'axios';

function getPostAPI(url) {
    return axios.get(url)
}

const GET_POST = 'GET_POST';

export const getPost = createAction(GET_POST, getPostAPI);

const initialState = {
    pending: false,
    error: false,
    data: {}
}

export default handleActions({
    ...pender({
        type: GET_POST,
        onSuccess: (state, action) => {
            const data = action.payload.data;
            return {
                data: data
            }
        }
    })
}, initialState);