import { fetchItems } from '../redux/items/items';
import { createApartment } from '../redux/items/createApartment';

const BASE_URL = 'https://booking-home-api.herokuapp.com/api/v1';

// export const getItems = (token) => async (dispatch) => {
//   const response = await axios.get(`${BASE_URL}/items`, { headers: { Authorization: token } });
//   dispatch(fetchItems(response.data.data));
// };

export const createApartmentHandler = (item, token) => async (dispatch) => {
  const newItem = { item };
  await fetch(`${BASE_URL}//apartments`, {
    method: 'POST',
    body: JSON.stringify(newItem),
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
    .then((res) => res.json())
    .then((resResponse) => dispatch(createApartment(resResponse)));
};
