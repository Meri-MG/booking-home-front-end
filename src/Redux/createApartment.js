const ADD_APARTMENT = 'https://booking-home-api.herokuapp.com/api/v1/apartments';

export const createApartment = (payload) => ({
  type: ADD_APARTMENT,
  payload,
});

const initialState = {
  data: [],
  createApartment: false,
  error: null,
};

const createApartmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_APARTMENT:
      return { ...state, data: action.payload, createApartment: true };
    default:
      return state;
  }
};

export default createApartmentReducer;
