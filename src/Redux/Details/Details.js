import { fetchData } from '../../api/api';

const APARTMENT_DETAILS = 'BOOKING_HOME/APARTMENT_DETAILS';

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
    console.log(error);
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
