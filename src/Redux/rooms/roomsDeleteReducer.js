import axios from 'axios';

const initialState = [];
const DELETE_ROOM = 'rooms/DELETE_ROOM';

const deleteRoomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ROOM:
      return action.payload;
    default:
      return state;
  }
};

export const deleteRoom = (id) => async (dispatch) => {
  await axios.delete(`https://booking-home-api.herokuapp.com/api/v1/apartments/${id}`)
    .then((response) => {
      dispatch({ type: DELETE_ROOM, payload: response });
    });
};

export default deleteRoomsReducer;
