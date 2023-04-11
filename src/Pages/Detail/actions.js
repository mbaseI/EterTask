import { GET_PRODUCT_DETAIL, SET_PRODUCT_DETAIL } from './constants';

export function getProductDetail(id) {
  return {
    type: GET_PRODUCT_DETAIL,
    id,
  };
}

export function setProductDetail(values) {
  return {
    type: SET_PRODUCT_DETAIL,
    values,
  };
}
