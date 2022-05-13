import { fetchData } from '../../api/api';

const initialState = {
  IsLogged_in: false,
  user: {},
  errors: null,
  status: '',
  loading: true,
};

export const LOGIN_SUCCESS = 'BOOKING_HOME/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'BOOKING_HOME/LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'BOOKING_HOME/LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'BOOKING_HOME/LOGOUT_FAILURE';

export const IS_LOGIN = 'BOOKING_HOME/IS_LOGIN';

export const logUserIn = (user) => async (dispatch) => {
  try {
    await fetchData
      .post('sessions', user, { withCredentials: true })
      .then((response) => dispatch({ type: LOGIN_SUCCESS, data: response.data }));
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, error });
  }
};

export const isLoggedIn = () => async (dispatch) => {
  try {
    await fetchData('logged_in', { withCredentials: true }).then((response) => dispatch({ type: IS_LOGIN, data: response.data }));
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, error });
  }
};

export const logUserOut = () => async (dispatch) => {
  try {
    await fetchData
      .delete('logout', { withCredentials: true })
      .then((response) => dispatch({ type: LOGOUT_SUCCESS, data: response.data }));
  } catch (error) {
    dispatch({ type: LOGOUT_FAILURE, error });
  }
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.data.user,
        IsLogged_in: action.data.logged_in,
        status: action.data.status,
      };
    case LOGIN_FAILURE:
      return { ...state, errors: action.error };
    case IS_LOGIN:
      return {
        ...state,
        user: action.data.user,
        IsLogged_in: action.data.logged_in,
        loading: false,
      };
    case LOGOUT_SUCCESS:
      return { ...state, IsLogged_in: action.data.logged_in };
    case LOGOUT_FAILURE:
      return { ...state, errors: action.error };

    default:
      return state;
  }
};

export default loginReducer;
