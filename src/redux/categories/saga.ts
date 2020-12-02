import { formatData } from './../../helpers/helpers';
import { takeLatest, put, call } from 'redux-saga/effects';

import {
  setCategories,
  setCategoriesLoadingState,
  addCategory,
  setLengthCategories,
} from './actions';
import { CategoriesActionTypes } from './type/ActionTypes';
import { LoadingState } from './type/state';
import { CategoriesApi } from '../../api/categorie-api';
import { setAlertData } from '../alert/actions';
import { TypesMessageAlert } from '../alert/type/state';

export function* watchFetchCatgories() {
  yield takeLatest(
    CategoriesActionTypes.FETCH_CATEGORIES,
    fetchCategoriesRequest,
  );
}
export function* watchFetchAllCatgories() {
  yield takeLatest(
    CategoriesActionTypes.FETCH_ALL_CATEGORIES,
    fetchAllCategoriesRequest,
  );
}

export function* watchAddCategory() {
  yield takeLatest(
    CategoriesActionTypes.REQUEST_ADD_CATEGORY,
    addCategoryRequest,
  );
}

function* fetchAllCategoriesRequest() {
  try {
    const { categories } = yield call(CategoriesApi.fetchAllCategories);

    yield put(setCategories(categories));
    yield put(setCategoriesLoadingState(LoadingState.LOADED));
  } catch (error) {
    yield put(setCategoriesLoadingState(LoadingState.ERROR));
    yield put(
      setAlertData('Не удалось загузить категории.', TypesMessageAlert.ERROR),
    );
  }
}
function* fetchCategoriesRequest({ payload }: any) {
  try {
    const { categories, totalCategory, currentLenCategory } = yield call(
      CategoriesApi.fetchCategories,
      payload,
    );

    yield put(setCategories(categories));
    yield put(
      setLengthCategories({
        total: totalCategory,
        current: currentLenCategory,
      }),
    );
    yield put(setCategoriesLoadingState(LoadingState.LOADED));
  } catch (error) {
    yield put(setCategoriesLoadingState(LoadingState.ERROR));
    yield put(
      setAlertData('Не удалось загузить категории.', TypesMessageAlert.ERROR),
    );
  }
}

function* addCategoryRequest({ payload }: any) {
  const data = formatData(payload);
  try {
    const item = yield call(CategoriesApi.addCategories, data);
    yield put(setAlertData('Категория сохраннена.', TypesMessageAlert.SUCCESS));
    yield put(addCategory(item));
  } catch (error) {
    yield put(setCategoriesLoadingState(LoadingState.ERROR));
    yield put(
      setAlertData('Не удалось сохранить категорию.', TypesMessageAlert.ERROR),
    );
  }
}

export const categoriesAllSagas = [
  watchFetchCatgories(),
  watchFetchAllCatgories(),
  watchAddCategory(),
];
