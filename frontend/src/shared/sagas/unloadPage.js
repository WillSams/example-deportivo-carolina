import { put, takeLatest } from 'redux-saga/effects';

import { actionTypes } from '../base';

export function* unloadPage({ pageName }) {
  yield put({
    type: `UNLOAD_${pageName}`,
  });
}

function* saga() {
  yield takeLatest(actionTypes.UNLOAD_PAGE, unloadPage);
}

export default saga;
