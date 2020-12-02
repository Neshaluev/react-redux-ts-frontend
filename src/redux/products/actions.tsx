import {
  ClearProductsActionInterface,
  ProductsActionTypes,
  RequestGetProductsActionInterface,
  SetLenghtProductsActionInterface,
  SetLoadingStateActionInterface,
  SetProductFiltersActionInterface,
  SetProductsActionInterface,
} from './type/ActionTypes';
import { LoadingState, ProductsState } from './type/state';

export const setProductsLoadingState = (
  payload: LoadingState,
): SetLoadingStateActionInterface => ({
  type: ProductsActionTypes.SET_LOADING_STATE,
  payload,
});

export const requestGetProducts = (
  payload: any,
): RequestGetProductsActionInterface => ({
  type: ProductsActionTypes.REQUEST_GET_PRODUCTS,
  payload,
});

export const setProducts = (
  payload: ProductsState['items'],
): SetProductsActionInterface => ({
  type: ProductsActionTypes.SET_PRODUCTS,
  payload,
});

export const clearProducts = (): ClearProductsActionInterface => ({
  type: ProductsActionTypes.CLEAR_PRODUCTS,
});

export const setProductFilters = (
  payload: any,
): SetProductFiltersActionInterface => ({
  type: ProductsActionTypes.SET_PRODUCT_FILTER,
  payload,
});

export const setLengthProducts = (
  payload: any,
): SetLenghtProductsActionInterface => ({
  type: ProductsActionTypes.SET_LENGTH_PRODUCTS,
  payload,
});
