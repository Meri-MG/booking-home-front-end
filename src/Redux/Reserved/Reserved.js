import { fetchData } from '../../api/api';

const RESERVED_APARTMENTS_FETCHED = 'booking-home/Apartments/APARTMENTS_FETCHED';
const RESERVED_FETCH_APARTMENT_FAILURE = 'booking-home/Apartments/FETCH_APARTMENT_FAILURE';

const initialState = {
  reservedApartments: [],
  response: '',
};

export const ReservedApartmentsFetched = (payload) => ({
  type: RESERVED_APARTMENTS_FETCHED,
  payload,
});

export const getReservedApartments = () => async (dispatch) => {
  try {
    await fetchData.get('api/v1/user_apartments').then((response) => {
      const newApartment = response.data;
      dispatch(ReservedApartmentsFetched(newApartment));
    });
  } catch (error) {
    dispatch({ type: RESERVED_FETCH_APARTMENT_FAILURE, error });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVED_APARTMENTS_FETCHED:
      return { reservedApartments: [...action.payload] };
    default:
      return state;
  }
};

export default reducer;
