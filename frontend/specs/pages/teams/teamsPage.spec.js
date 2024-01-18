import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { mountWithRouter } from '../../reactTestHelpers';
import TeamsPage from '../../../src/pages/teams';

Enzyme.configure({ adapter: new Adapter() });

describe('TeamPage component', () => {
  const pages = ['team1', 'team2', 'team3', 'team4', 'team5'];

  pages.forEach((page) => {
    it(`should render ${page} page`, () => {
      const initialEntries = [`/teams/${page}`];
      const wrapper = mountWithRouter(
        <Routes>
          <Route
            exact
            path={'/teams/:teamId'}
            element={<TeamsPage teamId={page} />}
          />
        </Routes>,
        initialEntries
      );

      expect(wrapper.find('div[data-name="teams-page"]').length).toEqual(1);
    });
  });
});
