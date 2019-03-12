import React from "react";
import Modal from "./Modal";

import { shallow, mount } from 'enzyme';

describe('<Modal />', () => {

        it('renders without crashing', () => {
            const wrapper = shallow(<Modal />);
            expect(wrapper).toHaveLength(1);
        });
    });