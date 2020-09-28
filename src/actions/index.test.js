import { correctGuess, actionTypes } from './';

describe('correctGuess', () => {
	it('return an action with type CORRECT_GUESS', () => {
		const action = correctGuess();
		expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
	});
});
