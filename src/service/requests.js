import axios from 'axios';

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('accessToken');

    config.headers = {
        'content-type': 'application/json',
        'x-accesstoken': (token) ? token : ''
    }

    return config;
});

const baseURL       = 'http://localhost:8082/';
const api           = baseURL + 'api/v1/';
const usersAPI      = api + 'users/';

// USERS API
export const createUser     = (payload) => axios.post(usersAPI + "register", payload);
export const loginUser      = (payload) => axios.post(usersAPI + "login", payload);
export const getUser        = () => axios.get(usersAPI + "me");
export const checkAuth      = () => axios.get(usersAPI + "check");