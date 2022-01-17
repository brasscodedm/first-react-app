import axios from 'axios';

const defaultOptions = {
  baseURL: 'https://gorest.co.in/public/v1',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer 08c29b7a1f0eb201f9f4b28391f78e0601cda28f917bd56d7a60bb0600ddef12',
  },
};

const Axios = axios.create(defaultOptions);

export default Axios;
