import React from "react";
import Modal from "./Modal";

import { shallow, mount } from 'enzyme';

describe('<Modal />', () => {

        it('should render without crashing', () => {
            const wrapper = shallow(<Modal />);
            expect(wrapper).toHaveLength(1);
        });

        it('should match snapshot', () => {
            const wrapper = shallow(<Modal />);
            expect(wrapper).toMatchSnapshot();
        });

        it('should show modal', () => {
            const mockState = {
                modal: false
            }

            const newState = {
                modal: true
            }
            
            const wrapper = shallow(<Modal />);
            wrapper.setState({ ...mockState })
            const newWrapper = wrapper.find('.button');
            newWrapper.simulate('click');
            expect(wrapper.instance().state).toEqual(newState);
        });
    });