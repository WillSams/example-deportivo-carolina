import React from 'react';
import { Provider } from 'react-redux';
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import configureStore, { history } from '../../configureStore';

import { InvalidRoute } from './';

import { default as Pages } from '../../pages';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <Router history={history}>
        <nav className="navbar navbar-dark fixed-top bg-dark navbar-expand-md navbar-expand-lg navbar-expand-xl">
          <div className="row mx-auto">
            <div className="col-md-2">
              <NavLink className="navbar-brand site" to="/">
                CLUB
              </NavLink>
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#siteLinks"
                aria-controls="#siteLinks"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div className="col-md-10">
              <div className="collapse navbar-collapse" id="siteLinks">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/news">
                      News
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-item nav-link dropdown-toggle mr-md-2"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Teams
                    </a>
                    <div className="dropdown-menu">
                      <NavLink className="dropdown-item" to="/teams/boysU9">
                        Boys U9
                      </NavLink>
                      <NavLink className="dropdown-item" to="/teams/boysU11">
                        Boys U11
                      </NavLink>
                      <NavLink className="dropdown-item" to="/teams/boysU13">
                        Boys U13
                      </NavLink>
                      <NavLink className="dropdown-item" to="/teams/boysU15">
                        Boys U15
                      </NavLink>
                      <NavLink className="dropdown-item" to="/teams/girlsU9">
                        Girls U9
                      </NavLink>
                      <NavLink className="dropdown-item" to="/teams/girlsU11">
                        Girls U11
                      </NavLink>
                      <NavLink className="dropdown-item" to="/teams/girlsU13">
                        Girls U13
                      </NavLink>
                      <NavLink className="dropdown-item" to="/teams/girlsU15">
                        Girls U15
                      </NavLink>
                    </div>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/commitments">
                      Commitments
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/staff">
                      Staff
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/partners">
                      Partners
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Pages.HomePage />} />
          <Route
            exact
            path="/teams/boysU9"
            element={<Pages.TeamsPage teamId={'boysU9'} />}
          />
          <Route
            exact
            path="/teams/boysU11"
            element={<Pages.TeamsPage teamId={'boysU11'} />}
          />
          <Route
            exact
            path="/teams/boysU13"
            element={<Pages.TeamsPage teamId={'boysU13'} />}
          />
          <Route
            exact
            path="/teams/boysU15"
            element={<Pages.TeamsPage teamId={'boysU15'} />}
          />
          <Route
            exact
            path="/teams/girlsU9"
            element={<Pages.TeamsPage teamId={'girlsU9'} />}
          />
          <Route
            exact
            path="/teams/girlsU11"
            element={<Pages.TeamsPage teamId={'girlsU11'} />}
          />
          <Route
            exact
            path="/teams/girlsU13"
            element={<Pages.TeamsPage teamId={'girlsU13'} />}
          />
          <Route
            exact
            path="/teams/girlsU15"
            element={<Pages.TeamsPage teamId={'girlsU15'} />}
          />
          <Route exact path="/teams/:teamId" element={<Pages.TeamsPage />} />
          <Route path="/auth/:authType" element={<Pages.AuthPage />} />
          <Route exact path="/:pageType" element={<Pages.StaticPage />} />
          <Route path="*" element={<InvalidRoute />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
