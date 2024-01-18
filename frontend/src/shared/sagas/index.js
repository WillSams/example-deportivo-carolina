import { all } from 'redux-saga/effects';

import handleApiRequestError from './handleApiRequestError';
import handleApiRequestUnauthorized from './handleApiRequestUnauthorized';
import loadPage from './loadPage';
import unloadPage from './unloadPage';
import logout from './logout';

export default function* rootSaga() {
  yield all([
    handleApiRequestError(),
    handleApiRequestUnauthorized(),
    logout(),
    unloadPage(),
  ]);
}
