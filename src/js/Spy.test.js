import React from "react";
import Spy from "./Spy";

import { shallow } from 'enzyme';

describe('<Spy />', () => {

        it('renders without crashing', () => {
            const wrapper = shallow(<Spy />);
            expect(wrapper).toHaveLength(1);
        })
    });