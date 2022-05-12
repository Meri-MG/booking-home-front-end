import axios from 'axios';

const initialState = [];
const FETCH_DATA = 'rooms/FETCH_DATA';
const POST_DATA = 'rooms/POST_DATA';

const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case POST_DATA:
      return action.payload;
    default:
      return state;
  }
};

export const fetchRooms = () => async (dispatch) => {
  await axios.get('https://booking-home-api.herokuapp.com/api/v1/apartments')
    .then((response) => {
      dispatch({ type: FETCH_DATA, payload: response.data });
    });
};

export const postRooms = (data) => async (dispatch) => {
  await axios.post('https://booking-home-api.herokuapp.com/api/v1/apartments', data)
    .then((response) => {
      dispatch({ type: POST_DATA, payload: response });
    });
};

export default roomsReducer;
