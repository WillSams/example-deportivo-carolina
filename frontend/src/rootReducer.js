import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import siteReducers from './pages/reducer';
import sharedReducer from './shared/sharedReducer';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    site: siteReducers,
    shared: sharedReducer,
  });

export default rootReducer;
