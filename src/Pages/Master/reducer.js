import produce from 'immer';
import {
  SET_BASKET,
  SET_BASKET_PRICE,
  SET_LOADER,
  SET_SEARCH_TEXT,
} from './constants';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'Master',
  storage: storage,
  blacklist: ['searchText', 'loaderStatus'],
};
export const initialState = {
  loaderStatus: false,
  searchText: '',
  basketPrice: '',
  basket: [],
};

const masterReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_LOADER:
        draft.loaderStatus = action.status;
        break;
      case SET_SEARCH_TEXT:
        draft.searchText = action.values;
        break;
      case SET_BASKET_PRICE:
        draft.basketPrice = action.price;
        break;
      case SET_BASKET:
        draft.basket.push(action.values);
        break;
      default:
        return draft;
    }
  });

export default persistReducer(persistConfig, masterReducer);
