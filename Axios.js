// set up base api end points

import axios from 'axios';

const ApiClient = axios.create({
    baseURL: 'https://helsinki-city-bikes-api-production.up.railway.app/api/v1'
});


export default ApiClient;

