import reducers from './reducers';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import penderMiddleware from 'redux-pender';

const logger = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
	applyMiddleware(logger, ReduxThunk, penderMiddleware())
));

export default store;