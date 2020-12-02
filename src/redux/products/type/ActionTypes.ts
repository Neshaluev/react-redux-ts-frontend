import { Action } from 'redux';
import { LoadingState, ProductsState } from './state';

export enum ProductsActionTypes {
  SET_LOADING_STATE = 'product/SET_LOADING_STATE',
  REQUEST_GET_PRODUCTS = 'product/REQUEST_GET_PRODUCTS',
  SET_PRODUCTS = 'product/SET_PRODUCTS',
  CLEAR_PRODUCTS = 'product/CLEAR_PRODUCTS',
  SET_PRODUCT_FILTER = 'product/SET_PRODUCT_FILTER',
  SET_LENGTH_PRODUCTS = 'categories/SET_LENGTH_PRODUCTS',
}

export interface SetLenghtProductsActionInterface
  extends Action<ProductsActionTypes> {
  type: ProductsActionTypes.SET_LENGTH_PRODUCTS;
  payload: any;
}

export interface SetLoadingStateActionInterface
  extends Action<ProductsActionTypes> {
  type: ProductsActionTypes.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface RequestGetProductsActionInterface
  extends Action<ProductsActionTypes> {
  type: ProductsActionTypes.REQUEST_GET_PRODUCTS;
  payload: any;
}

export interface SetProductsActionInterface
  extends Action<ProductsActionTypes> {
  type: ProductsActionTypes.SET_PRODUCTS;
  payload: ProductsState['items'];
}

export interface ClearProductsActionInterface
  extends Action<ProductsActionTypes> {
  type: ProductsActionTypes.CLEAR_PRODUCTS;
}

export interface SetProductFiltersActionInterface
  extends Action<ProductsActionTypes> {
  type: ProductsActionTypes.SET_PRODUCT_FILTER;
  payload: any;
}

export type ActionProducts =
  | SetLoadingStateActionInterface
  | RequestGetProductsActionInterface
  | SetProductsActionInterface
  | ClearProductsActionInterface
  | SetProductFiltersActionInterface
  | SetLenghtProductsActionInterface;
