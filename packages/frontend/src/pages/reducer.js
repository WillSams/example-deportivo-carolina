import { combineReducers } from 'redux';

import authReducer from '../pages/auth/reducers';
//import newsReducer from '../pages/news/reducers';
import teamsReducer from '../pages/teams/reducer';

const reducer = combineReducers({
  // auth: authReducer,
  // news: newsReducer,
  teams: teamsReducer,
});

export default reducer;