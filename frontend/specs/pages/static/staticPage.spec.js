import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { mountWithRouter } from '../../reactTestHelpers';
import StaticPage from '../../../src/pages/static';

configure({ adapter: new Adapter() });

describe('StaticPage component', () => {
  const pages = [
    'About',
    'Commitments',
    'News',
    'Partners',
    'Privacy',
    'Staff',
    'Terms',
  ];

  pages.forEach((page) => {
    it(`should render ${page} page`, () => {
      const initialEntries = [`/${page.toLowerCase()}`];
      const wrapper = mountWithRouter(
        <Routes>
          <Route exact path="/:pageType" element={<StaticPage />} />
        </Routes>,
        initialEntries
      );

      const title = wrapper.find('h1').text();
      expect(title).toEqual(page);
    });
  });
});
