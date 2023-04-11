import {
  GET_PRODUCTS,
  SET_SEARCHED_PRODUCTS,
  SET_BRANDS_FILTER,
  SET_MODELS_FILTER,
  SET_SORT_FILTER,
  RESET_FILTERS,
} from './constants';

export function getProducts() {
  return {
    type: GET_PRODUCTS,
  };
}

export function setSortFilter(values) {
  return {
    type: SET_SORT_FILTER,
    values,
  };
}

export function setBrandsFilter(values) {
  return {
    type: SET_BRANDS_FILTER,
    values,
  };
}

export function setModelsFilter(values) {
  return {
    type: SET_MODELS_FILTER,
    values,
  };
}

export function resetFilters() {
  return {
    type: RESET_FILTERS,
  };
}

export function setSearchedProducts(values) {
  return {
    type: SET_SEARCHED_PRODUCTS,
    values,
  };
}
