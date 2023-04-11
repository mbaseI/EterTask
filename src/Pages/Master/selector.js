import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectMaster = (state) => state.master || initialState;

const makeSelectMaster = () =>
  createSelector(selectMaster, (subState) => subState);

export { makeSelectMaster };
