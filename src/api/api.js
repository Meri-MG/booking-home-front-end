import axios from 'axios';

export const fetchData = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: { 'Content-Type': 'application/json' },
});

export const getData = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
  headers: { 'Content-Type': 'application/json' },
});
