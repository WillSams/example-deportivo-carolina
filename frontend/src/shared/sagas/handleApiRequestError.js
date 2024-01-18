import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { actionTypes } from '../base';

export function* handleApiRequestError({ error }) {
  const response = error.response || {};

  // Forbidden
  if (response.status == 403) {
    yield put(push('/'));
    yield put({
      type: actionTypes.SET_ALERT,
      message: 'You do not have sufficient permissions.',
      alertType: 'danger',
    });
    return;
  }

  if (response.status == 500) {
    yield put({
      type: actionTypes.SET_ALERT,
      message: 'Oops! Something went wrong.',
      alertType: 'danger',
    });
  }
}

function* saga() {
  yield takeLatest(actionTypes.API_REQUEST_ERROR, handleApiRequestError);
}

export default saga;
