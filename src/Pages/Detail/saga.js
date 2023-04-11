import { put, takeLatest } from 'redux-saga/effects';
import ApiStore from '../../request';
import { GET_PRODUCT_DETAIL } from './constants';
import { setProductDetail } from './actions';
import { setLoader } from '../Master/actions';

function* getProductDetailSaga(action) {
  try {
    yield put(setLoader(true));
    const response = yield ApiStore.products.get(`${action.id}`);
    yield put(setProductDetail(response.data));
    yield put(setLoader(false));
  } catch (e) {
    yield put(setLoader(false));
  }
}

function* detailSaga() {
  yield takeLatest(GET_PRODUCT_DETAIL, getProductDetailSaga);
}

export default detailSaga;
