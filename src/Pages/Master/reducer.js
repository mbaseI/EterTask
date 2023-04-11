import produce from 'immer';
import {
  DECREASE_ITEM,
  INCREASE_ITEM,
  SET_BASKET,
  SET_LOADER,
  SET_SEARCH_TEXT,
} from './constants';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'Master',
  storage: storage,
  blacklist: ['searchText', 'loaderStatus'],
};
export const initialState = {
  loaderStatus: false,
  searchText: '',
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

      case SET_BASKET:
        if (draft.basket.some((x) => x.id === action.values.id)) {
          let item = draft.basket.find((y) => y.id === action.values.id);
          item.count++;
        } else {
          draft.basket.push({ ...action.values, count: 1 });
        }
        break;
      case INCREASE_ITEM: {
        let index = draft.basket.findIndex((y) => y.id === action.id);
        if (index !== -1) draft.basket[index].count++;
        break;
      }
      case DECREASE_ITEM:
        {
          let index = draft.basket.findIndex((y) => y.id === action.id);
          if (index !== -1) {
            draft.basket[index].count--;
            if (draft.basket[index].count < 1) draft.basket.splice(index, 1);
          }
        }
        break;
      default:
        return draft;
    }
  });

export default persistReducer(persistConfig, masterReducer);
