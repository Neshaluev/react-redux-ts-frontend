import { takeLatest, put, call } from 'redux-saga/effects';

import { ProductsApi } from './../../api/products-api';
import { CategoriesApi } from '../../api/categorie-api';
import { LoadingState } from './type/state';

import {
  CategoryActionTypes,
  RequestDeleteCategoryActionInterface,
  RequestFindByIdCategoryInterface,
  RequestPutCategoryActionInterface,
} from './type/ActionTypes';
import {
  setCategory,
  setCategoryLoadingState,
  setProductsForCategory,
  putCategory,
} from './actions';
import { formatData } from '../../helpers/helpers';
import { TypesMessageAlert } from '../alert/type/state';
import { setAlertData } from '../alert/actions';

export function* watchFetchCategory() {
  yield takeLatest(
    CategoryActionTypes.REQUEST_FIND_BY_ID_CATEGORY,
    requestFetchCategory,
  );
}
export function* watchPutCategory() {
  yield takeLatest(
    CategoryActionTypes.REQUEST_PUT_CATEGORY,
    requestPutCategory,
  );
}
export function* watchDeleteCategory() {
  yield takeLatest(
    CategoryActionTypes.REQUEST_DELETE_CATEGORY,
    deleteCategoryRequest,
  );
}

function* requestFetchCategory({ payload }: RequestFindByIdCategoryInterface) {
  try {
    const item = yield call(CategoriesApi.findByIdCategories, payload);
    const { products } = yield call(ProductsApi.findByIdProducts, payload);
    yield put(setCategory(item));
    yield put(setProductsForCategory(products));
    yield put(setCategoryLoadingState(LoadingState.LOADED));
  } catch (error) {
    yield put(setCategoryLoadingState(LoadingState.ERROR));
    yield put(
      setAlertData('Не удалось загузить категории.', TypesMessageAlert.ERROR),
    );
  }
}

function* requestPutCategory({ payload }: RequestPutCategoryActionInterface) {
  const { id, categoryData } = payload;
  const data = formatData(categoryData);
  try {
    const item = yield call(CategoriesApi.putCategories, { id, data });
    yield put(putCategory(item));
    yield put(setAlertData('Категории обновленна.', TypesMessageAlert.SUCCESS));
  } catch (error) {
    yield put(setCategoryLoadingState(LoadingState.ERROR));
    yield put(
      setAlertData('Не удалось обновить категорию.', TypesMessageAlert.ERROR),
    );
  }
}

function* deleteCategoryRequest({
  payload,
}: RequestDeleteCategoryActionInterface) {
  try {
    yield call(CategoriesApi.deleteCategories, payload);
    yield put(setAlertData('Категория удаленна.', TypesMessageAlert.SUCCESS));
  } catch (error) {
    yield put(setCategoryLoadingState(LoadingState.ERROR));
    yield put(
      setAlertData('Не удалось удалить категорию.', TypesMessageAlert.ERROR),
    );
  }
}

export const categoryAllSagas = [
  watchFetchCategory(),
  watchPutCategory(),
  watchDeleteCategory(),
];
