import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducers = combineReducers({
});

const middlewares = [thunk,logger];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
