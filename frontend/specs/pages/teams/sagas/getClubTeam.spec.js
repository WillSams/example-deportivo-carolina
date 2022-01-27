import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { throwError } from 'redux-saga-test-plan/providers';

import { actionTypes, onFailure, onSuccessful } from '../../../../src/shared/base';
import { fetchQuery, getTeam } from '../../../../src/shared/graphql';

import getClubTeam from '../../../../src/pages/teams/sagas';

describe('Get Club Team saga', () => {
  let scenario;

  const team = { Id: 1, Name: 'Test Player', };
  const action = {
    type: actionTypes.GET_TEAM,
    teamId: team.Id,
  };
  const expectedRequestParams = { teamId: team.Id, };

  beforeEach(() => {
    scenario = expectSaga(getClubTeam)
      .dispatch(action);
  });

  afterEach(() => { scenario = null; });

  it('successful retrieval of team', () => {
    const response = {
      data: {
        data: {
          team,
        },
      },
    };

    return scenario
      .provide([[call(fetchQuery, getTeam, expectedRequestParams), response]])
      .put({
        type: onSuccessful(actionTypes.GET_TEAM),
        response: response.data,
      })
      .silentRun();
  });

  it('failed retrieval of team', () => {
    const error = new Error('error');
    const message = 'Could not retrieve team.';

    return scenario
      .provide([[call(fetchQuery, getClubTeam, expectedRequestParams), throwError(message)]])
      .put({
        type: onFailure(actionTypes.GET_TEAM),
        alertType: 'danger',
        message,
      })
      .put({
        type: actionTypes.SET_ALERT,
        alertType: 'danger',
        message,
      })
      .silentRun();
  });
});