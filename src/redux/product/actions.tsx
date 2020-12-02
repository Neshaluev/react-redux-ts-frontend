import {
  ProductActionTypes,
  SetLoadingStateActionInterface,
  RequestCreateProductActionInterface,
  SetProductActionInterface,
  RequetsFindByIdProduct,
  ClearProductActionInterface,
  RequestPutProductActionInterface,
  RequetsDeleteProductActionInterface,
} from './type/ActionTypes';
import { LoadingState, TypeProduct } from './type/state';

export const setProductLoadingState = (
  payload: LoadingState,
): SetLoadingStateActionInterface => ({
  type: ProductActionTypes.SET_LOADING_STATE,
  payload,
});

export const requestCreateProduct = (
  payload: any,
): RequestCreateProductActionInterface => ({
  type: ProductActionTypes.REQUEST_CREATE_PRODUCT,
  payload,
});

export const requestPutProduct = (
  payload: any,
): RequestPutProductActionInterface => ({
  type: ProductActionTypes.REQUEST_PUT_PRODUCT,
  payload,
});

export const setProduct = (
  payload: TypeProduct,
): SetProductActionInterface => ({
  type: ProductActionTypes.SET_PRODUCT,
  payload,
});

export const requestFindByIdProduct = (
  payload: string,
): RequetsFindByIdProduct => ({
  type: ProductActionTypes.REQUEST_FIND_BY_ID_PRODUCT,
  payload,
});

export const clearProduct = (): ClearProductActionInterface => ({
  type: ProductActionTypes.CLEAR_PRODUCT,
});

export const requetsDeleteProduct = (
  payload: any,
): RequetsDeleteProductActionInterface => ({
  type: ProductActionTypes.REQUEST_DELETE_PRODUCT,
  payload,
});
