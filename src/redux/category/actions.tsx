import { TypeCategory } from '../categories/type/state';
import {
  CategoryActionTypes,
  ClearCategoryActionInterface,
  DeleteCategoryActionInterface,
  PutCategoryActionInterface,
  RequestDeleteCategoryActionInterface,
  RequestFindByIdCategoryInterface,
  RequestPutCategoryActionInterface,
  SetCategoryInterface,
  SetLoadingStateActionInterface,
  SetProductsForCategoryInterface,
} from './type/ActionTypes';
import { CategoryState, LoadingState } from './type/state';

export const setCategoryLoadingState = (
  payload: LoadingState,
): SetLoadingStateActionInterface => ({
  type: CategoryActionTypes.SET_LOADING_STATE,
  payload,
});

export const requestFindByIdCategory = (
  payload: string,
): RequestFindByIdCategoryInterface => ({
  type: CategoryActionTypes.REQUEST_FIND_BY_ID_CATEGORY,
  payload,
});

export const setCategory = (payload: TypeCategory): SetCategoryInterface => ({
  type: CategoryActionTypes.SET_CATEGORY,
  payload,
});

export const setProductsForCategory = (
  payload: CategoryState['listProduct'],
): SetProductsForCategoryInterface => ({
  type: CategoryActionTypes.SET_PRODUCTS_FOR_CATEGORY,
  payload,
});

export const clearCategory = (): ClearCategoryActionInterface => ({
  type: CategoryActionTypes.CLEAR_CATEGORY,
});

export const requetsPutCategory = (
  payload: any,
): RequestPutCategoryActionInterface => ({
  type: CategoryActionTypes.REQUEST_PUT_CATEGORY,
  payload,
});

export const putCategory = (payload: any): PutCategoryActionInterface => ({
  type: CategoryActionTypes.PUT_CATEGORY,
  payload,
});

export const deleteCategory = (
  payload: string,
): DeleteCategoryActionInterface => ({
  type: CategoryActionTypes.DELETE_CATEGORY,
  payload,
});

export const requestDeleteCategory = (
  payload: string,
): RequestDeleteCategoryActionInterface => ({
  type: CategoryActionTypes.REQUEST_DELETE_CATEGORY,
  payload,
});
