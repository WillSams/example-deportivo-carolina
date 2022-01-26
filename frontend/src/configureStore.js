import _ from 'lodash';

import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

import { actionTypes, createBaseApi } from './shared/base';

export const history = createBrowserHistory({});

export default function configureStore(initialState = {}) {
  const logger = createLogger({
    collapsed: true,
    predicate: (getState, action) =>
      process.env.NODE_ENV === 'development' &&
      !_.includes(
        [
          actionTypes.API_REQUEST,
          actionTypes.API_REQUEST_DONE,
        ],
        action.type
      ),
  });

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer(history),
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware, logger)
    )
  );

  createBaseApi(store);
  sagaMiddleware.run(rootSaga);

  return store;
}
