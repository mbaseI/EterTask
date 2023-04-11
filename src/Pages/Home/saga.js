import { put, takeLatest } from 'redux-saga/effects';
import ApiStore from '../../request';
import { GET_PRODUCTS } from './constants';
import { setSearchedProducts } from './actions';
import { setLoader } from '../Master/actions';

function* getProductsSaga(action) {
  try {
    yield put(setLoader(true));
    const response = yield ApiStore.products.get();
    yield put(setSearchedProducts(response.data));
    yield put(setLoader(false));
  } catch (e) {
    yield put(setLoader(false));
  }
}

function* homeSaga() {
  yield takeLatest(GET_PRODUCTS, getProductsSaga);
}

export default homeSaga;
