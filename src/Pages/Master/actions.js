import {
  SET_LOADER,
  SET_SEARCH_TEXT,
  SET_BASKET_PRICE,
  SET_BASKET,
} from './constants';

export function setLoader(status) {
  return {
    type: SET_LOADER,
    status,
  };
}

export function setBasketPrice(price) {
  return {
    type: SET_BASKET_PRICE,
    price,
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
