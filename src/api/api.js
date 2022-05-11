import axios from 'axios';
import { apartmentsFetched } from '../Redux/Apartments/Apartments';

export const fetchData = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: { 'Content-Type': 'application/json' },
});

export const getData = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
  headers: { 'Content-Type': 'application/json' },
});

export const getApartments = () => async (dispatch) => {
  axios.get('http://localhost:3000/api/v1/apartments')
    .then((response) => {
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
};
