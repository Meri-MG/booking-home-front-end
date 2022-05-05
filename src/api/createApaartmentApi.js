import { createApartment } from '../Redux/createApartment';

const BASE_URL = 'https://booking-home-api.herokuapp.com/api/v1';


export const createApartmentHandler = (apartment, token) => async (dispatch) => {
  const newApartment = { apartment };
  await fetch(`${BASE_URL}/apartments`, {
    method: 'POST',
    body: JSON.stringify(newApartment),
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
    .then((res) => res.json())
    .then((resResponse) => dispatch(createApartment(resResponse)));
};
