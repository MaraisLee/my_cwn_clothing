import { all, call } from 'redux-saga/effects';
import { cateogoriesSaga } from './categories/category.saga';

// generator function
export function* rootSaga() {
  yield all([call(cateogoriesSaga)]);
}
