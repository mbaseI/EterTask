import { combineReducers } from 'redux';
import homeReducer from './Pages/Home/reducer';
import detailReducer from './Pages/Detail/reducer';
import masterReducer from './Pages/Master/reducer';

const rootReducer = combineReducers({
  home: homeReducer,
  detail: detailReducer,
  master: masterReducer,
});

export default rootReducer;
