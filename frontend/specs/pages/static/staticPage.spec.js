import React from 'react';
import { Routes, Route, } from 'react-router-dom';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { mountWithRouter } from '../../reactTestHelpers';
import { default as Pages } from '../../../src/pages';

Enzyme.configure({ adapter: new Adapter() });

describe('StaticPage component', () => {
    const pages = ['About', 'Commitments', 'News', 'Partners', 'Privacy', 'Staff', 'Terms'];

    pages.forEach(page => {
        it(`should render ${page} page`, () => {
            const initialEntries = [`/${page.toLowerCase()}`];
            const wrapper = mountWithRouter(
                <Routes>
                    <Route exact path='/:pageType' element={<Pages.StaticPage />} />
                </Routes>,
                initialEntries
            );

            const title = wrapper.find('h1').text();
            expect(title).toEqual(page);
        });
    });
});