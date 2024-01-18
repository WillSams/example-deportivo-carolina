import {
  actionTypes,
  createPageReducer,
  onSuccessful,
} from '../../shared/base';

const initialState = {
  teamId: '',
  team: {},
  loading: true,
};

const actionHandlers = {
  [onSuccessful(actionTypes.GET_TEAM)]: (state, action) => {
    return {
      ...state,
      teamId: action?.response?.data?.team.Id,
      team: action?.response?.data?.team,
      loading: false,
    };
  },
};

export default createPageReducer(
  actionTypes.TEAMS_PAGE,
  initialState,
  actionHandlers
);
