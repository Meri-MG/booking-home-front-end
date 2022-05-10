const FETCH_APARTMENT_DETAILS = 'FETCH_APARTMENT_DETAILS';

const initialState = {
  apartments: [],
};

export const fetchApartmentDetails = (payload) => ({
  type: FETCH_APARTMENT_DETAILS,
  payload,
});

const apartmentsDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APARTMENT_DETAILS:
      return { ...state, apartments: action.payload };
    default:
      return state;
  }
};

export default apartmentsDetailsReducer;
