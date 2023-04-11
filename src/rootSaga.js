import { all } from 'redux-saga/effects';
import homeSaga from './Pages/Home/saga';
import detailSaga from './Pages/Detail/saga';

export default function* rootSaga() {
  yield all([homeSaga(), detailSaga()]);
}
