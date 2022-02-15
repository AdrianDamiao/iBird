const axios = require('axios');

export const api = axios.create({
    baseURL: 'https://localhost:5001/api',
});