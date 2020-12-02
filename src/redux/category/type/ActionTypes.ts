import { Action } from 'redux';
import { TypeProduct } from '../../products/type/state';
import { LoadingState, TypeCategory } from './state';

export enum CategoryActionTypes {
  SET_LOADING_STATE = 'category/SET_LOADING_STATE',
  REQUEST_FIND_BY_ID_CATEGORY = 'category/REQUEST_FIND_BY_ID_CATEGORY',
  SET_CATEGORY = 'category/SET_CATEGORY',
  REQUEST_FETCH_PRODUCTS_FOR_CATEGORY = 'category/REQUEST_FETCH_PRODUCTS_FOR_CATEGORY',
  SET_PRODUCTS_FOR_CATEGORY = 'category/SET_PRODUCTS_FOR_CATEGORY',
  CLEAR_CATEGORY = 'category/CLEAR_CATEGORY',
  REQUEST_PUT_CATEGORY = 'category/REQUEST_PUT_CATEGORY',
  PUT_CATEGORY = 'category/PUT_CATEGORY',
  REQUEST_DELETE_CATEGORY = 'category/REQUEST_DELETE_CATEGORY',
  DELETE_CATEGORY = 'category/DELETE_CATEGORY',
}

export interface RequestPutCategoryActionInterface
  extends Action<CategoryActionTypes> {
  type: CategoryActionTypes.REQUEST_PUT_CATEGORY;
  payload: any;
}

export interface PutCategoryActionInterface
  extends Action<CategoryActionTypes> {
  type: CategoryActionTypes.PUT_CATEGORY;
  payload: any;
}

export interface ClearCategoryActionInterface
  extends Action<CategoryActionTypes> {
  type: CategoryActionTypes.CLEAR_CATEGORY;
}

export interface SetLoadingStateActionInterface
  extends Action<CategoryActionTypes> {
  type: CategoryActionTypes.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface RequestFindByIdCategoryInterface
  extends Action<CategoryActionTypes> {
  type: CategoryActionTypes.REQUEST_FIND_BY_ID_CATEGORY;
  payload: string;
}

export interface SetCategoryInterface extends Action<CategoryActionTypes> {
  type: CategoryActionTypes.SET_CATEGORY;
  payload: TypeCategory;
}

export interface RequestFetchProductsForCategoryInterface
  extends Action<CategoryActionTypes> {
  type: CategoryActionTypes.REQUEST_FETCH_PRODUCTS_FOR_CATEGORY;
  payload: string;
}
export interface SetProductsForCategoryInterface
  extends Action<CategoryActionTypes> {
  type: CategoryActionTypes.SET_PRODUCTS_FOR_CATEGORY;
  payload: TypeProduct[];
}

export interface RequestDeleteCategoryActionInterface
  extends Action<CategoryActionTypes> {
  type: CategoryActionTypes.REQUEST_DELETE_CATEGORY;
  payload: string;
}
export interface DeleteCategoryActionInterface
  extends Action<CategoryActionTypes> {
  type: CategoryActionTypes.DELETE_CATEGORY;
  payload: string;
}

export type ActionCategory =
  | SetLoadingStateActionInterface
  | RequestFindByIdCategoryInterface
  | SetCategoryInterface
  | RequestFetchProductsForCategoryInterface
  | SetProductsForCategoryInterface
  | ClearCategoryActionInterface
  | RequestPutCategoryActionInterface
  | PutCategoryActionInterface
  | RequestDeleteCategoryActionInterface
  | DeleteCategoryActionInterface;
