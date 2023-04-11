import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectDetail = (state) => state.detail || initialState;

const makeSelectDetail = () =>
  createSelector(selectDetail, (subState) => subState);

export { makeSelectDetail };
