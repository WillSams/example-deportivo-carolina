import { actionTypes, onSuccessful } from '../../../src/shared/base';
import teamsReducer from '../../../src/pages/teams/reducer';

describe('teamsReducer', () => {

    test(`${onSuccessful(actionTypes.GET_TEAM)}`, () => {
        const response = {
            data: { team: { id: '1', Name: 'Test Player', }, },
        };

        const initialState = { loading: true, team: [], };

        const action = {
            type: onSuccessful(actionTypes.GET_TEAM),
            response,
        };

        const state = teamsReducer(initialState, action);

        expect(state).toEqual({
            ...state,
            team: response.data.team,
        });
    });
});
