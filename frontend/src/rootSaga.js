import { all } from 'redux-saga/effects';

import { default as sharedSagas } from './shared/sagas';
import { default as homePageSagas } from './pages/home/sagas';
import { default as teamsPageSagas } from './pages/teams/sagas';

export default function* rootSaga() {
  yield all([sharedSagas(), homePageSagas(), teamsPageSagas()]);
}
