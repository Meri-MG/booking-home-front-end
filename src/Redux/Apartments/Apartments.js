import { getData } from '../../api/api';

const APARTMENTS_FETCHED = 'booking-home/Apartments/APARTMENTS_FETCHED';
const REMOVE_APARTMENT = 'booking-home/Apartments/REMOVE_APARTMENT';
const REMOVE_APARTMENT_SUCCESS = 'booking-home/Apartments/REMOVE_APARTMENT_SUCCESS';
const REMOVE_APARTMENT_FAILURE = 'booking-home/Apartments/REMOVE_APARTMENT_FAILURE';

const initialState = {
  apartments: [],
  response: '',
};

export const apartmentsFetched = (payload) => ({
  type: APARTMENTS_FETCHED,
  payload,
});

export const removeApartmentFromList = (id) => ({
  type: REMOVE_APARTMENT,
  id,
});

export const removeApartment = (id) => async (dispatch) => {
  try {
    dispatch(removeApartmentFromList(id));
    await getData
      .delete('id', id)
      .then((response) => dispatch({ type: REMOVE_APARTMENT_SUCCESS, response }));
  } catch (error) {
    dispatch({ type: REMOVE_APARTMENT_FAILURE, error });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APARTMENTS_FETCHED:
      return { apartments: [...action.payload] };
    case REMOVE_APARTMENT:
      return {
        ...state,
        apartments: [
          ...state.apartments.filter((apartment) => apartment.id !== action.id),
        ],
      };
    case REMOVE_APARTMENT_SUCCESS:
      return { ...state, response: action.response.data };
    case REMOVE_APARTMENT_FAILURE:
      return { ...state, response: action.error };
    default:
      return state;
  }
};

export default reducer;
