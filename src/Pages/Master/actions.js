import {
  SET_LOADER,
  SET_SEARCH_TEXT,
  SET_BASKET,
  INCREASE_ITEM,
  DECREASE_ITEM,
} from './constants';

export function setLoader(status) {
  return {
    type: SET_LOADER,
    status,
  };
}

export function setBasket(values) {
  return {
    type: SET_BASKET,
    values,
  };
}

export function setSearchText(values) {
  return {
    type: SET_SEARCH_TEXT,
    values,
  };
}

export function increaseItem(id) {
  return {
    type: INCREASE_ITEM,
    id,
  };
}

export function decreaseItem(id) {
  return {
    type: DECREASE_ITEM,
    id,
  };
}
