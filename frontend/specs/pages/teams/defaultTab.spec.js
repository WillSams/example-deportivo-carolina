import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import DefaultTab from '../../../src/pages/teams/tabs/DefaultTab';

configure({ adapter: new Adapter() });

describe('DefaultTab component', () => {

    it('should render Default tab even if arena name prop is empty', () => {
        const wrapper = shallow(<DefaultTab />);

        expect(wrapper.find('h3').text()).toEqual('Field Name Here');
    });

    it('should render Default tab with set arena name', () => {
        const props = { arenaName: 'Test Field' };
        const wrapper = shallow(<DefaultTab {...props} />);

        const tab = wrapper.find('div[data-name="arena-tab"]');
        expect(tab.find('h3').text()).toEqual(props.arenaName);
    });
});