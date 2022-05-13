import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import loginReducer from './Login/Login';
import registerReducer from './Register/Register';
import apartmentsReducer from './Apartments/Apartments';
import apartmentsDetailsReducer from './Details/Details';
import reservationsReducer from './Reserved/Reserved';

const reducers = combineReducers({
  LogIn: loginReducer,
  Register: registerReducer,
  Apartments: apartmentsReducer,
  Details: apartmentsDetailsReducer,
  Reservations: reservationsReducer,
});

const middlewares = [thunk, logger];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
