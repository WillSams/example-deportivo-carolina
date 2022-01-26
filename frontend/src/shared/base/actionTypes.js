export const actionTypes = {
  // Page actions
  LOAD_PAGE: 'shared/LOAD_PAGE',
  PAGE_NOT_FOUND: 'shared/PAGE_NOT_FOUND',
  UNLOAD_PAGE: 'shared/UNLOAD_PAGE',

  LOAD_PAGE_SUCCESS: 'shared/LOAD_PAGE_SUCCESS',
  LOAD_PAGE_ERROR: 'shared/LOAD_PAGE_ERROR',
  LOAD_PAGE_FAILED: 'shared/LOAD_PAGE_FAILED',

  // Shared API Requests
  API_REQUEST_ERROR: 'shared/API_REQUEST_ERROR',
  API_REQUEST_UNAUTHORIZED: 'shared/API_REQUEST_UNAUTHORIZED',
  API_REQUEST_NOT_FOUND: 'shared/API_REQUEST_NOT_FOUND',

  API_REQUEST: 'shared/API_REQUEST',
  API_REQUEST_DONE: 'shared/API_REQUEST_DONE',

  //Shared Alert
  SET_ALERT: 'shared/SET_ALERT',

  // Site Pages - Invalid Route Page Actions
  INVALID_ROUTE_PAGE: 'site/shared/INVALID_ROUTE_PAGE',

  // Site Pages - Auth Page Actions
  AUTH_PAGE: 'site/auth/AUTH_PAGE',
  LOGIN: 'site/auth/LOGIN',
  LOGOUT: 'site/auth/LOGOUT',

  // Site Pages - Invalid Route Page Actions
  LOAD_HOME_PAGE_SUCCESS: 'site/home/LOAD_HOME_PAGE_SUCCESS',
  LOAD_HOME_PAGE_FAILED: 'site/home/LOAD_HOME_PAGE_SUCCESS',

  LOAD_NEWS_PAGE_SUCCESS: 'site/news/LOAD_NEWS_PAGE_SUCCESS',
  LOAD_NEWS_PAGE_FAILED: 'site/news/LOAD_NEWS_PAGE_SUCCESS',


  UNLOAD_TEAMS_PAGE: 'site/teams/UNLOAD_TEAMS_PAGE',
  LOAD_TEAMS_PAGE: 'site/teams/LOAD_TEAMS_PAGE',
  LOAD_TEAMS_PAGE_SUCCESS: 'site/teams/LOAD_TEAMS_PAGE_SUCCESS',
  LOAD_TEAMS_PAGE_FAILED: 'site/teams/LOAD_TEAMS_PAGE_SUCCESS',

  HOME_PAGE: 'site/home/HOME_PAGE',

  // Site Pages - Teams Actions
  TEAMS_PAGE: 'site/teams/TEAMS_PAGE',
  GET_TEAM: 'site/teams/GET_TEAM',
  GET_TEAM_SUCCESS: 'site/teams/GET_TEAM_SUCCESS',
  GET_TEAM_FAILED: 'site/teams/GET_TEAMFAILED',
  GET_PLAYERS_FOR_TEAM: 'site/teams/GET_PLAYERS_FOR_TEAM'
};