import { put, takeLatest } from 'redux-saga/effects';

import { actionTypes } from '../base';

export function* loadPage({ pageName }) {
  yield put({
    type: `LOAD_${pageName}`,
  });
}

function* saga() {
  yield takeLatest(actionTypes.UNLOAD_PAGE, loadPage);
}

export default saga;
