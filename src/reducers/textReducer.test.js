import textReducer, { init } from './textReducer';

describe('textReducer', () => {
  test('no action should return initial state', () => {
    const state = textReducer(undefined, { type: undefined });
    expect(state).toEqual(init);
  });
});
