import React from "react";
import {Card} from "./Card";
import { shallow } from 'enzyme';

jest.mock('../../index.js', () => "root");

describe('<Card />', () => {
        it('renders without crashing', () => {
            const wrapper = shallow(<Card />);
            expect(wrapper).toHaveLength(1);
        });
        it('should change heart icon style from unselected to selected when heart icon is selected', () => {
            const toggle = true;
            const changedIconClass = toggle ? 'selected-icon-style' : 'icon-style';

            const props = { // para poder mockear la action-prop 
                buildPurchaseArray: jest.fn()
            }  

            const mockState = {
                toggle:  toggle,
                iconClass: changedIconClass
            }

            const newState = {
                toggle:  !toggle,
                iconClass: changedIconClass 
            }
            
            const wrapper = shallow(<Card {...props} />);
            wrapper.setState({ ...mockState })
            const newWrapper = wrapper.find('#icon-heart');
            newWrapper.simulate('click');
            expect(wrapper.instance().state).toEqual(newState);
        });

        it('should change heart icon style from unselected to selected when heart icon is selected', () => {
            const toggle = false;
            const changedIconClass = toggle ? 'selected-icon-style' : 'icon-style';

            const props = { // para poder mockear la action-prop 
                buildPurchaseArray: jest.fn()
            } 

            const mockState = {
                toggle:  toggle,
                iconClass: changedIconClass
            }

            const newState = {
                toggle:  !toggle,
                iconClass: changedIconClass 
            }
            
            const wrapper = shallow(<Card {...props}  />);
            wrapper.setState({ ...mockState })
            const newWrapper = wrapper.find('#icon-heart');
            newWrapper.simulate('click');
            expect(wrapper.instance().state).toEqual(newState);
        });
    });