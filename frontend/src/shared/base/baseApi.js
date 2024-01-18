import axios from 'axios';
import _ from 'lodash';

import { actionTypes } from './actionTypes';

let instance = null;

export const createBaseApi = (store) => {
  // not the way we should be doing token authorization, this is just a placeholder
  instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api`,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN_SECRET} `,
    },
  });

  instance.interceptors.request.use(
    (config) => {
      store.dispatch({ type: actionTypes.API_REQUEST });

      return config;
    },
    (error) => {
      store.dispatch({
        type: actionTypes.API_REQUEST_ERROR,
        error,
      });

      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      store.dispatch({ type: actionTypes.API_REQUEST_DONE });

      if (response.data.errors) {
        store.dispatch({
          type: actionTypes.API_REQUEST_ERROR,
          error: response.data.errors,
        });
      }

      return response;
    },
    (error) => {
      store.dispatch({ type: actionTypes.API_REQUEST_DONE });

      if (error.response.status == 401)
        store.dispatch({ type: actionTypes.API_REQUEST_UNAUTHORIZED });

      if (error.response.status === 404)
        store.dispatch({ type: actionTypes.API_REQUEST_NOT_FOUND });

      return Promise.reject(error);
    }
  );
  return instance;
};

export const getBaseApi = () => {
  if (instance == null) throw new Error('Base API not initialized.');

  return instance;
};
