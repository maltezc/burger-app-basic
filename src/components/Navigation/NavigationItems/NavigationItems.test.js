import React from 'react';


import { configure, shallow } from'enzyme'; // shallow renders components

import Adapter from 'enzyme-adapter-react-16';

import Navigationitems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';


configure({adapter: new Adapter()})

describe('<NavigationItems />', () => {
    it('should render two <NavigationItem /> elements if not authenticated', () => {
        const wrapper = shallow(<Navigationitems/>);
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });
})