import { fetchData } from '../../api/api';

const APARTMENT_DETAILS = 'BOOKING_HOME/APARTMENT_DETAILS';
const FETCH_APARTMENT_FAILURE = 'BOOKING_HOME/FETCH_APARTMENT_FAILURE';

const initialState = [];

export const fetchApartmentDetails = (payload) => ({
  type: APARTMENT_DETAILS,
  payload,
});

export const getApartmentDetails = (id) => async (dispatch) => {
  try {
    await fetchData(`api/v1/apartments/${id}`).then((response) => {
      const newApartment = response.data;
      dispatch(fetchApartmentDetails(newApartment));
    });
  } catch (error) {
    dispatch({ type: FETCH_APARTMENT_FAILURE, error });
  }
};

const apartmentsDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case APARTMENT_DETAILS:
      return { ...action.payload };
    default:
      return state;
  }
};

export default apartmentsDetailsReducer;
