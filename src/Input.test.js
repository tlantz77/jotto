import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

const setup = (initialState = {}) => {
	const store = storeFactory(initialState);
	const wrapper = shallow(<Input store={store} />)
		.dive()
		.dive();
	return wrapper;
};

describe('render', () => {
	describe('word has not been guessed', () => {
		it('should render component without error', () => {});

		it('should render input box', () => {});

		it('should render submit button', () => {});
	});

	describe('word has been guessed', () => {
		it('should render component without error', () => {});

		it('should not render input box', () => {});

		it('should not render submit button', () => {});
	});
});

describe('update state', () => {});
