import produce from 'immer';
import {
  RESET_FILTERS,
  SET_BRANDS_FILTER,
  SET_MODELS_FILTER,
  SET_SEARCHED_PRODUCTS,
  SET_SORT_FILTER,
} from './constants';

export const initialState = {
  searchedProducts: [],
  selectedSort: '',
  selectedBrands: [],
  selectedModels: [],
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_SEARCHED_PRODUCTS:
        draft.searchedProducts = action.values;
        break;
      case SET_SORT_FILTER:
        draft.selectedSort = action.values;
        break;
      case SET_BRANDS_FILTER:
        // eslint-disable-next-line no-case-declarations
        const brandsIndex = draft.selectedBrands.indexOf(action.values);
        if (brandsIndex === -1) {
          draft.selectedBrands.push(action.values);
        } else {
          draft.selectedBrands.splice(brandsIndex, 1);
        }
        break;
      case SET_MODELS_FILTER:
        // eslint-disable-next-line no-case-declarations
        const modelsIndex = draft.selectedModels.indexOf(action.values);
        if (modelsIndex === -1) {
          draft.selectedModels.push(action.values);
        } else {
          draft.selectedModels.splice(modelsIndex, 1);
        }
        break;
      case RESET_FILTERS:
        draft.selectedBrands = [];
        draft.selectedModels = [];
        break;
      default:
        break;
    }
  });

export default homeReducer;
