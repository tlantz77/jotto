import React from 'react';
import { shallow } from 'enzyme';

import App, { UnconnectedApp } from './App';
import { storeFactory } from '../test/testUtils';

const setup = (state = {}) => {
	const store = storeFactory(state);
	const wrapper = shallow(<App store={store} />)
		.dive()
		.dive();
	return wrapper;
};

describe('redux properties', () => {
  it('should have success piece of state', () => {
    const success = true;
    const wrapper = setup({ success });

    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  it('should have secretWord piece of state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });

    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });

  it('should have guessedWords piece of state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });

    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });

  it('should have getSecretWord action creator is a function in props', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

it('should run getSecretWord on App mount', () => {
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: []
  }
  const wrapper = shallow(<UnconnectedApp {...props} />);
  wrapper.instance().componentDidMount();
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});