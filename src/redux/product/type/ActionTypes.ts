import { Action } from 'redux';
import { LoadingState, TypeProduct } from './state';

export enum ProductActionTypes {
  SET_LOADING_STATE = 'product/SET_LOADING_STATE',
  REQUEST_FIND_BY_ID_PRODUCT = 'product/REQUEST_FIND_BY_ID_PRODUCT',
  SET_PRODUCT = 'product/SET_PRODUCT',
  REQUEST_CREATE_PRODUCT = 'product/REQUEST_CREATE_PRODUCT',
  REQUEST_DELETE_PRODUCT = 'product/REQUEST_DELETE_PRODUCT',
  DELETE_PRODUCT = 'product/DELETE_PRODUCT',
  REQUEST_PUT_PRODUCT = 'product/REQUEST_PUT_PRODUCT',
  PUT_PRODUCT = 'product/PUT_PRODUCT',
  CLEAR_PRODUCT = 'product/CLEAR_PRODUCT',
}

export interface SetLoadingStateActionInterface
  extends Action<ProductActionTypes> {
  type: ProductActionTypes.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface RequestPutProductActionInterface
  extends Action<ProductActionTypes> {
  type: ProductActionTypes.REQUEST_PUT_PRODUCT;
  payload: any;
}
export interface ClearProductActionInterface
  extends Action<ProductActionTypes> {
  type: ProductActionTypes.CLEAR_PRODUCT;
}

export interface RequestCreateProductActionInterface
  extends Action<ProductActionTypes> {
  type: ProductActionTypes.REQUEST_CREATE_PRODUCT;
  payload: any;
}

export interface RequetsFindByIdProduct extends Action<ProductActionTypes> {
  type: ProductActionTypes.REQUEST_FIND_BY_ID_PRODUCT;
  payload: string;
}
export interface RequetsDeleteProductActionInterface
  extends Action<ProductActionTypes> {
  type: ProductActionTypes.REQUEST_DELETE_PRODUCT;
  payload: any;
}

export interface SetProductActionInterface extends Action<ProductActionTypes> {
  type: ProductActionTypes.SET_PRODUCT;
  payload: TypeProduct;
}

export type ActionProduct =
  | SetLoadingStateActionInterface
  | RequetsFindByIdProduct
  | SetProductActionInterface
  | RequestCreateProductActionInterface
  | RequestPutProductActionInterface
  | RequetsDeleteProductActionInterface
  | SetProductActionInterface
  | RequestCreateProductActionInterface
  | ClearProductActionInterface;
