import pagereducer from './reducer';
import {penderReducer} from 'redux-pender';
import {combineReducers} from 'redux';

const reducers = combineReducers({
    pagereducer,
    pender: penderReducer
});

export default reducers;