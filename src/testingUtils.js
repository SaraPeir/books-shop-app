import React from 'react';

export const createMockStore = (initialState = {}) => ({
  getState: () => ({
    ...initialState
  }),
  dispatch: () => {},
  subscribe: () => {}
});

// Connected components
export const mockConnectedStore = (Component, initialState = {}, ownProps = {}) =>
  <Component store={createMockStore(initialState)} {...ownProps}/>;