import { actionTypes, onSuccessful } from '../../../src/shared/base';
import teamsReducer from '../../../src/pages/teams/reducer';

describe('teamsReducer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('handles site/teams/GET_TEAM_SUCCESS', () => {
    const response = {
      data: { team: { id: '1', Name: 'Test Player' } },
    };

    // Define the initial state
    const initialState = {
      loading: true,
      team: [],
    };

    const action = {
      type: onSuccessful(actionTypes.GET_TEAM),
      response,
    };

    const state = teamsReducer(initialState, action);

    const expectedState = {
      ...initialState,
      loading: false, // Updated loading to false
      team: response.data.team,
    };

    expect(state).toEqual(expectedState);
  });
});
