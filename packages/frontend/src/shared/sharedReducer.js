import { actionTypes, onSuccessful } from './base';

export const initialState = {
  requestInProgress: false,
  count: 0,
  alertMessage: null,
  alertType: null,
  pageLoading: false,
  pageNotFound: false,
};

// Basic tracker on when API requests go out and when they are finished
export default (state = initialState, action) => {
  switch (action.type) {
    // api requests
    case actionTypes.API_REQUEST:
      const incCount = state.count + 1;

      return {
        ...state,
        count: incCount,
        requestInProgress: incCount > 0,
      };
    case actionTypes.API_REQUEST_DONE:
    case actionTypes.API_REQUEST_ERROR:
      const decCount = state.count - 1;

      return {
        ...state,
        count: decCount,
        requestInProgress: decCount > 0,
      };

    // alerts
    case actionTypes.SET_ALERT:
      return {
        ...state,
        alertMessage: action.message,
        alertType: action.alertType,
      };
    case actionTypes.CLEAR_ALERT:
      return {
        ...state,
        alertMessage: null,
        alertType: null,
      };

    // common page actions
    case actionTypes.LOAD_PAGE:
      return {
        ...state,
        pageLoading: true,
        pageNotFound: false,
      };
    case actionTypes.PAGE_NOT_FOUND:
      return {
        ...state,
        pageLoading: false,
        pageNotFound: true,
      };
    case onSuccessful(actionTypes.LOAD_PAGE):
      return {
        ...state,
        pageLoading: false,
        pageNotFound: false,
      };

    default:
      return state;
  }
};