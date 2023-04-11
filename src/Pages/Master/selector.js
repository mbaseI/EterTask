import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectMaster = (state) => state.master || initialState;

const makeSelectMaster = () =>
  createSelector(selectMaster, (subState) => subState);

const makeSelectBasketPrice = createSelector(selectMaster, (subState) => {
  return subState.basket?.reduce((accumulator, object) => {
    return accumulator + object.price * object.count;
  }, 0);
});

export { makeSelectMaster, makeSelectBasketPrice };
