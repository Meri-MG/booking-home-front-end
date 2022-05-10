const APARTMENTS_FETCHED = 'booking-home/Apartments/APARTMENTS_FETCHED';

const initialState = {
  apartments: [],
};

export const apartmentsFetched = (payload) => ({
  type: APARTMENTS_FETCHED,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APARTMENTS_FETCHED:
      return { apartments: [...action.payload] };
    default:
      return state;
  }
};

export default reducer;
