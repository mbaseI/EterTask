import produce from 'immer';
import { SET_PRODUCT_DETAIL } from './constants';

export const initialState = {
  productDetail: [],
};

const detailReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_PRODUCT_DETAIL:
        draft.productDetail = action.values;
        break;
      default:
        break;
    }
  });

export default detailReducer;
