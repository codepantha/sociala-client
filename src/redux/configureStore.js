import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import loginReducer from './auth/auth';
import postsReducer from './posts/posts';

const finalReducer = combineReducers({ loginReducer, postsReducer });
const store = createStore(finalReducer, applyMiddleware(thunk, logger));

export default store;
