import { all, call } from 'redux-saga/effects';
import { cateogoriesSaga } from './categories/category.saga';
import { userSagas } from './user/user.saga';

// generator function
export function* rootSaga() {
  yield all([call(cateogoriesSaga), call(userSagas)]);
}
