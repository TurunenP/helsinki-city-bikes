// set up base api end points

import axios from 'axios';

const ApiClient = axios.create({
    baseURL: 'https://164.90.211.131/api/v1'
});


export default ApiClient;

