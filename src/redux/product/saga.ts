import { formatData } from './../../helpers/helpers';
import { takeLatest, put, call } from 'redux-saga/effects';

import { setProduct, setProductLoadingState } from './actions';
import {
  ProductActionTypes,
  RequestCreateProductActionInterface,
  RequestPutProductActionInterface,
  RequetsFindByIdProduct,
} from './type/ActionTypes';
import { ProductsApi } from './../../api/products-api';
import { LoadingState } from './type/state';
import { setAlertData } from '../alert/actions';
import { TypesMessageAlert } from '../alert/type/state';

export function* watchCreateProduct() {
  yield takeLatest(
    ProductActionTypes.REQUEST_CREATE_PRODUCT,
    requestCreateProduct,
  );
}
export function* watchPutProduct() {
  yield takeLatest(ProductActionTypes.REQUEST_PUT_PRODUCT, requestPutProduct);
}
export function* watchFindByIdProduct() {
  yield takeLatest(
    ProductActionTypes.REQUEST_FIND_BY_ID_PRODUCT,
    findByIdProduct,
  );
}
export function* watchDeleteProduct() {
  yield takeLatest(
    ProductActionTypes.REQUEST_DELETE_PRODUCT,
    requestDeleteProduct,
  );
}

function* requestCreateProduct({
  payload,
}: RequestCreateProductActionInterface) {
  const { productData, history } = payload;
  const data = formatData(productData);
  try {
    const product = yield call(ProductsApi.createProduct, data);
    yield put(setProduct(product));
    yield put(setProductLoadingState(LoadingState.LOADED));
    yield history.push(`/product/${product._id}`);
    yield put(setAlertData('Продукт сохранен.', TypesMessageAlert.SUCCESS));
  } catch (error) {
    yield put(setProductLoadingState(LoadingState.ERROR));
    yield put(
      setAlertData('Не удалось сохранить продукт.', TypesMessageAlert.ERROR),
    );
  }
}

function* requestPutProduct({ payload }: RequestPutProductActionInterface) {
  const { _id, ...productData } = payload;
  const data = formatData(productData);
  try {
    const product = yield call(ProductsApi.putProduct, { _id, data });
    yield put(setProduct(product));
    yield put(setProductLoadingState(LoadingState.LOADED));
    yield put(setAlertData('Продукт обновлен.', TypesMessageAlert.SUCCESS));
  } catch (error) {
    yield put(setProductLoadingState(LoadingState.ERROR));
    yield put(
      setAlertData('Не удалось обновить продукт.', TypesMessageAlert.ERROR),
    );
  }
}
function* requestDeleteProduct({ payload }: RequestPutProductActionInterface) {
  const { id, history } = payload;
  try {
    yield call(ProductsApi.deleteProduct, id);
    yield put(setProductLoadingState(LoadingState.LOADED));
    yield history.push(`/home`);
    yield put(setAlertData('Продукт удален.', TypesMessageAlert.SUCCESS));
  } catch (error) {
    yield put(setProductLoadingState(LoadingState.ERROR));
    yield put(
      setAlertData('Не удалось удалить продукт.', TypesMessageAlert.ERROR),
    );
  }
}

function* findByIdProduct({ payload }: RequetsFindByIdProduct) {
  try {
    const product = yield call(ProductsApi.findByIdProduct, payload);
    yield put(setProduct(product));
    yield put(setProductLoadingState(LoadingState.LOADED));
  } catch (error) {
    yield put(setProductLoadingState(LoadingState.ERROR));
  }
}

export const productAllSagas = [
  watchCreateProduct(),
  watchFindByIdProduct(),
  watchPutProduct(),
  watchDeleteProduct(),
];
