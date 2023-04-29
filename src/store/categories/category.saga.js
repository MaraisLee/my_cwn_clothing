import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from './category.action';

import { CATEGORIES_ACTION_TYPES } from './category.type';

export function* fetchCategoriesAsync() {
  try {
    const categoryiesArray = yield call(
      getCategoriesAndDocuments,
      'categories'
    );
    yield put(fetchCategoriesSuccess(categoryiesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* cateogoriesSaga() {
  // 모든걸 실행하고 전부 실행되면 done해라.
  // all() 아래 코드들 실행 안됌.
  yield all([call(onFetchCategories)]);
}
