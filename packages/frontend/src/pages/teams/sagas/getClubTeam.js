import { call, takeLatest, put } from 'redux-saga/effects';

import { actionTypes, onFailure, onSuccessful } from '../../../shared/base';
import { fetchQuery, getTeam } from '../../../shared/graphql';

export function* getClubTeam({ teamId, }) {
  try {
    const variables = { teamId, };
    const response = yield call(fetchQuery, getTeam, variables);

    if (response.data.errors) throw new Error('getClubTeam-saga-error');

    yield put({
      type: onSuccessful(actionTypes.GET_TEAM),
      response: response.data,
    });
  } catch (ex) {
    const message = 'Could not retrieve team.';
    yield put({
      type: onFailure(actionTypes.GET_TEAM),
      alertType: 'danger',
      message
    });
    yield put({
      type: actionTypes.SET_ALERT,
      alertType: 'danger',
      message
    });
  }
}

function* saga() {
  yield takeLatest(actionTypes.GET_TEAM, getClubTeam);
}

export default saga;
