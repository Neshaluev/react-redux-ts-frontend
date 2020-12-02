import { takeLatest, put, call } from 'redux-saga/effects';
import { setProducts, setLengthProducts } from './actions';
import {
  ProductsActionTypes,
  RequestGetProductsActionInterface,
} from './type/ActionTypes';
import { ProductsApi } from './../../api/products-api';
import { LoadingState } from './type/state';
import { setProductsLoadingState } from './actions';
import { setAlertData } from '../alert/actions';
import { TypesMessageAlert } from '../alert/type/state';

export function* watchFetchProducts() {
  yield takeLatest(
    ProductsActionTypes.REQUEST_GET_PRODUCTS,
    requestFetchProducts,
  );
}

function* requestFetchProducts({ payload }: RequestGetProductsActionInterface) {
  try {
    const { products, totalProducts, currentLenProduct } = yield call(
      ProductsApi.fetchProducts,
      payload,
    );

    yield put(setProducts(products));
    yield put(
      setLengthProducts({ total: totalProducts, current: currentLenProduct }),
    );
    yield put(setProductsLoadingState(LoadingState.LOADED));
  } catch (error) {
    yield put(setProductsLoadingState(LoadingState.ERROR));
    yield put(
      setAlertData('Не удалось загрузить продукты.', TypesMessageAlert.ERROR),
    );
  }
}

export const productsAllSagas = [watchFetchProducts()];
