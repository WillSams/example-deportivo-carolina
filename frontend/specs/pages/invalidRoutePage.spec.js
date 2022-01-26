import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import { mountWithRouter } from '../reactTestHelpers';
import { InvalidRoutePage } from '../../src/shared/components/InvalidRoute';

describe('InvalidRoutePage', () => {
  test('should render without error', () => {
    const wrapper = mountWithRouter(<InvalidRoutePage />);
    const title = wrapper.find('h1').text();

    expect(title).toEqual('Page not found');
  });
});
