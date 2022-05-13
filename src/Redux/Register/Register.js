import { fetchData } from '../../api/api';
import { isLoggedIn } from '../Login/Login';

const initialState = {
  IsLogged_in: false,
  user: {},
  errors: null,
  status: '',
};

export const SIGNUP_SUCCESS = 'BOOKING_HOME/SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'BOOKING_HOME/SIGNUP_FAILURE';

export const signUserUp = (user) => async (dispatch) => {
  try {
    await fetchData
      .post('registrations', user, { withCredentials: true })
      .then((response) => dispatch({ type: SIGNUP_SUCCESS, data: response.data }));
    dispatch(isLoggedIn());
  } catch (error) {
    dispatch({ type: SIGNUP_FAILURE, error });
  }
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.data.user,
        errors: action.data?.errors,
        status: action.data.status,
      };
    case SIGNUP_FAILURE:
      return { ...state, errors: action.error };

    default:
      return state;
  }
};

export default registerReducer;
