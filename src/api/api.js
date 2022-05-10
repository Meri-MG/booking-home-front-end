import axios from 'axios';
import { ApartmentsFetched } from '../redux/Apartments/Apartments';

const fetchData = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: { 'Content-Type': 'application/json' },
});

export const getApartments = () => async (dispatch) => {
  axios.get('http://localhost:3000/api/v1/apartments')
    .then((response) => {
      const newapartment = response.data;
      const mappedApartments = Object.entries(newapartment).map(([apartment_id, apartment]) => {
        const { apartment_name, description } = apartment;
        return { apartment_id, apartment_name, description };
      });
      dispatch(ApartmentsFetched(mappedApartments));
    });
};

export default fetchData;
