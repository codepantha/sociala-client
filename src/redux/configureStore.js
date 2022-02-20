import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import loginReducer from './auth/auth';

const finalReducer = combineReducers({ loginReducer });
const store = createStore(finalReducer, applyMiddleware(thunk, logger));

export default store;
