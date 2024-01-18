import axios from 'axios';
import { actionTypes } from './actionTypes';

let instance = null;

const createInstance = (token) => {
  return axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api`,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: `Bearer ${token}`,
    },
  });
};

const handleRequest = (config, store) => {
  store.dispatch({ type: actionTypes.API_REQUEST });
  return config;
};

const handleRequestError = (error, store) => {
  store.dispatch({
    type: actionTypes.API_REQUEST_ERROR,
    error,
  });
  return Promise.reject(error);
};

const handleResponse = (response, store) => {
  store.dispatch({ type: actionTypes.API_REQUEST_DONE });
  if (response.data.errors) {
    store.dispatch({
      type: actionTypes.API_REQUEST_ERROR,
      error: response.data.errors,
    });
  }
  return response;
};

const handleResponseError = (error, store) => {
  store.dispatch({ type: actionTypes.API_REQUEST_DONE });
  if (error.response.status == 401) {
    store.dispatch({ type: actionTypes.API_REQUEST_UNAUTHORIZED });
  }
  if (error.response.status === 404) {
    store.dispatch({ type: actionTypes.API_REQUEST_NOT_FOUND });
  }
  return Promise.reject(error);
};

export const createBaseApi = async (store) => {
  try {
    const tokenResponse = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/token`
    );
    const token = tokenResponse?.data?.token;
    instance = createInstance(token);

    instance.interceptors.request.use(
      (config) => handleRequest(config, store),
      (error) => handleRequestError(error, store)
    );
    instance.interceptors.response.use(
      (response) => handleResponse(response, store),
      (error) => handleResponseError(error, store)
    );

    return instance;
  } catch (error) {
    console.error('Error fetching token:', error);
    throw error;
  }
};

export const getBaseApi = () => {
  if (instance == null) throw new Error('Base API not initialized.');
  return instance;
};
