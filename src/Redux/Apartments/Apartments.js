import { getData, fetchData } from '../../api/api';

const APARTMENTS_FETCHED = 'booking-home/Apartments/APARTMENTS_FETCHED';
const REMOVE_APARTMENT = 'booking-home/Apartments/REMOVE_APARTMENT';
const REMOVE_APARTMENT_SUCCESS = 'booking-home/Apartments/REMOVE_APARTMENT_SUCCESS';
const REMOVE_APARTMENT_FAILURE = 'booking-home/Apartments/REMOVE_APARTMENT_FAILURE';
const ADD_NEW_APARTMENT = 'booking-home/Apartments/ADD_NEW_APARTMENT';
const RESERVE_APARTMENT = 'booking-home/Apartments/RESERVE_APARTMENT';
const FETCH_APARTMENT_FAILURE = 'booking-home/Apartments/FETCH_APARTMENT_FAILURE';

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

export const reserveApartmentFromList = (id) => ({
  type: RESERVE_APARTMENT,
  id,
});

export const addNewApartment = (payload) => ({
  type: ADD_NEW_APARTMENT,
  payload,
});

export const getApartments = () => async (dispatch) => {
  try {
    await fetchData('api/v1/apartments/').then((response) => {
      const newApartment = response.data;
      const mappedApartments = Object.entries(newApartment).map(([id, apartment]) => {
        const { name, description } = apartment;
        return {
          id,
          apartment: apartment.id,
          name,
          description,
          front: apartment.images.front,
          price: apartment.price,
        };
      });
      dispatch(apartmentsFetched(mappedApartments));
    });
  } catch (error) {
    dispatch({ type: FETCH_APARTMENT_FAILURE, error });
  }
};

export const removeApartment = (id) => async (dispatch) => {
  try {
    dispatch(removeApartmentFromList(id));
    await getData
      .delete(`apartments/${id}`)
      .then((response) => dispatch({ type: REMOVE_APARTMENT_SUCCESS, response }));
  } catch (error) {
    dispatch({ type: REMOVE_APARTMENT_FAILURE, error });
  }
};

export const sendApartmentToAPI = (payload) => async (dispatch) => {
  const {
    name,
    location,
    description,
    image1,
    image2,
    image3,
    rental_price,
    house_price,
    period,
    user_id,
  } = payload;

  const apartment = {
    name,
    location,
    description,
    image1,
    image2,
    image3,
    rental_price,
    house_price,
    period,
    user_id,
  };

  await fetchData.post('api/v1/apartments', { apartment });
  dispatch(addNewApartment(payload));
};

export const reserveApartment = (payload) => async (dispatch) => {
  const {
    favourite,
    user_id,
    apartment_id,
  } = payload;

  const apartment = {
    favourite,
    user_id,
  };

  await fetchData.put(`api/v1/apartments/${apartment_id}`, { apartment });
  dispatch(addNewApartment(payload));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APARTMENTS_FETCHED:
      return { apartments: [...action.payload] };
    case ADD_NEW_APARTMENT:
      return { ...state, apartments: action.payload };
    case REMOVE_APARTMENT:
      return {
        ...state,
        apartments: [
          ...state.apartments.filter((apartment) => apartment.apartment !== action.id),
        ],
      };
    case REMOVE_APARTMENT_SUCCESS:
      return { ...state, response: action.response.data };
    case REMOVE_APARTMENT_FAILURE:
      return { ...state, response: action.error };
    case RESERVE_APARTMENT:
      return { ...state, apartments: action.payload };
    default:
      return state;
  }
};

export default reducer;
