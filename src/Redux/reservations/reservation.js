import axios from 'axios';

const initialState = {
  reservations: [],
  reservation: {},
};
const FETCH_DATA = 'reservations/FETCH_DATA';
const POST_DATA = 'reservations/POST_DATA';

const reservationsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DATA:
      return {
        ...state,
        reservations: [payload],
      };
    case POST_DATA:
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
};

export const fetchReservations = () => async (dispatch) => {
  await axios.get('https://booking-home-api.herokuapp.com/api/v1/bookings')
    .then((response) => {
      dispatch({ type: FETCH_DATA, payload: response.data });
    });
};

export const postReservations = (data) => async (dispatch) => {
  await axios.post('https://booking-home-api.herokuapp.com/api/v1/bookings', data)
    .then((response) => {
      dispatch({ type: POST_DATA, payload: response });
    });
};

export default reservationsReducer;
