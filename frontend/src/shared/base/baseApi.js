import axios from 'axios';
import _ from 'lodash';

import { actionTypes } from './actionTypes';

let instance = null;

const errorMessages404 = [
  'Argument "id" has invalid value $id.',
  'document_download_request_not_found',
  'form_not_found',
  'payment_not_found',
];

export const createBaseApi = store => {
  instance = axios.create({
    baseURL: 'http://localhost:4040/api',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  });

  instance.interceptors.request.use(
    config => {
      store.dispatch({ type: actionTypes.API_REQUEST, });

      return config;
    },
    error => {
      store.dispatch({
        type: actionTypes.API_REQUEST_ERROR,
        error,
      });

      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    response => {
      store.dispatch({ type: actionTypes.API_REQUEST_DONE, });

      if (response.data.errors) {
        const missingResourceErrors = _.filter(response.data.errors, error =>
          _.includes(errorMessages404, error.message)
        );

        if (missingResourceErrors.length > 0)
          return store.dispatch({ type: actionTypes.API_REQUEST_NOT_FOUND, });

        store.dispatch({
          type: actionTypes.API_REQUEST_ERROR,
          error: response.data.errors,
        });
      }

      return response;
    },
    error => {
      store.dispatch({ type: actionTypes.API_REQUEST_DONE, });

      if (error.response.status == 401)
        store.dispatch({ type: actionTypes.API_REQUEST_UNAUTHORIZED, });

      if (error.response.status === 404)
        store.dispatch({ type: actionTypes.API_REQUEST_NOT_FOUND, });

      return Promise.reject(error);
    }
  );
  return instance;
};

export const getBaseApi = () => {
  if (instance == null) throw new Error('Base API not initialized.');

  return instance;
};
