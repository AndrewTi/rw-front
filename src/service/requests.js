import axios from 'axios';

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('accessToken');

    config.headers = {
        'content-type': 'application/json',
        'x-accesstoken': (token) ? token : ''
    }

    return config;
});

const baseURL           = 'http://localhost:8082/';
const api               = baseURL + 'api/v1/';
const usersAPI          = api + 'users/';
const collectionsAPI    = api + 'collections/';
const tagsAPI           = api + 'tags/';

// USERS API
export const createUser     = (payload) => axios.post(usersAPI + "register", payload);
export const loginUser      = (payload) => axios.post(usersAPI + "login", payload);
export const getUser        = () => axios.get(usersAPI + "me");
export const checkAuth      = () => axios.get(usersAPI + "check");

// COLLECTIONS API
export const getCollections     = () => axios.get(collectionsAPI);
export const getCollectionById     = (id) => axios.get(collectionsAPI + id);
export const addCollectionReq      = (payload) => axios.post(collectionsAPI, payload);
export const deleteCollectionReq   = (id) => axios.delete(collectionsAPI + id);
export const updateCollectionReq   = (id) => axios.put(collectionsAPI + id);

// TAGS API
export const getTags = () => axios.get(tagsAPI);
export const getTagById     = (id) => axios.get(collectionsAPI + id);
export const addTagReq = (payload) => axios.post(tagsAPI, payload)
export const deleteTagReq   = (id) => axios.delete(tagsAPI + id);
export const updateTagReq   = (id) => axios.put(tagsAPI + id);