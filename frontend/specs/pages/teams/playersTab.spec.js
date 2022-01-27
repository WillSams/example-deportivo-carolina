import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import PlayersTab from '../../../src/pages/teams/tabs/PlayersTab';

configure({ adapter: new Adapter() });

describe('PlayersTab component', () => {

    it('should render Players tab even if players prop is empty', () => {
        const wrapper = shallow(<PlayersTab players={[]} />);

        expect(wrapper.find('div[data-name="players-tab"]').length).toEqual(1);
        expect(wrapper.find('table').length).toEqual(0);
    });

    it('should render Players tab with table of players', () => {
        const props = {
            players: [
                {
                    Metadata: 'Player1',
                    Position: 'F',
                    PlayerName: 'John Doe',
                    BirthDate: '2010-01-01',
                    Height: '60',
                    Weight: '100',
                    Shoots: 'both',
                    Hometown: 'Yourtown, SC',
                },
                {
                    Metadata: 'Player1',
                    Position: 'F',
                    PlayerName: 'Jane Doe',
                    BirthDate: '2010-01-01',
                    Height: '55',
                    Weight: '75',
                    Shoots: 'both',
                    Hometown: 'Yourtown, SC',
                },
            ],
        };

        const wrapper = shallow(<PlayersTab {...props} />);

        expect(wrapper.find('div[data-name="players-tab"]').length).toEqual(1);
        expect(wrapper.find('table').length).toEqual(1);
    });
});