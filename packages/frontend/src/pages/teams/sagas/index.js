import { all } from 'redux-saga/effects';

import getClubTeam from './getClubTeam';

export default function* rootSaga() {
  yield all([
    getClubTeam(),
  ]);
};