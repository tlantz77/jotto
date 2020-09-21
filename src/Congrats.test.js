import React from 'react';
import { shallow } from 'enzyme';

import { checkProps, findByTestAttr } from '../test/testUtils';
import Congrats from './Congrats';

const defaultProps = { success: false };

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps}/>)
};

it('renders without error', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

it('should render no text when "success" prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

it('renders non-empty congrats message when "success" prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'component-message');
  expect(message.text().length).not.toBe(0);
});

it('should not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});