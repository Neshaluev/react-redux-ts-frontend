import { Action } from 'redux';
import { CategoriesState, LoadingState, TypeCategory } from './state';

export enum CategoriesActionTypes {
  SET_CATEGORIES_DATA = 'categories/SET_CATEGORIES_DATA',
  FETCH_CATEGORIES = 'categories/FETCH_CATEGORIES',
  FETCH_ALL_CATEGORIES = 'categories/FETCH_ALL_CATEGORIES',
  SET_LOADING_STATE = 'categories/SET_LOADING_STATE',
  REQUEST_ADD_CATEGORY = 'categories/REQUEST_ADD_CATEGORY',
  ADD_CATEGORY = 'categories/ADD_CATEGORY',
  REQUEST_CLEAR_CATEGORIES = 'categories/REQUEST_CLEAR_CATEGORIES',
  CLEAR_CATEGORIES = 'categories/CLEAR_CATEGORIES',
  SET_CATEGORIES_FILTER = 'categories/SET_CATEGORIES_FILTER',
  SET_LENGTH_CATEGORIES = 'categories/SET_LENGTH_CATEGORIES',
}

export interface SetCategoriesFilters extends Action<CategoriesActionTypes> {
  type: CategoriesActionTypes.SET_CATEGORIES_FILTER;
  payload: any;
}

export interface RequestClearCategoriesActionInterface {
  type: CategoriesActionTypes.REQUEST_CLEAR_CATEGORIES;
}

export interface ClearCategoriesActionInterface {
  type: CategoriesActionTypes.CLEAR_CATEGORIES;
}

export interface SetCategoriesActionInterface
  extends Action<CategoriesActionTypes> {
  type: CategoriesActionTypes.SET_CATEGORIES_DATA;
  payload: CategoriesState['items'];
}

export interface FetchCategoriesActionInterface
  extends Action<CategoriesActionTypes> {
  type: CategoriesActionTypes.FETCH_CATEGORIES;
  payload: any;
}
export interface FetchAllCategoriesActionInterface
  extends Action<CategoriesActionTypes> {
  type: CategoriesActionTypes.FETCH_ALL_CATEGORIES;
}
export interface SetLoadingStateActionInterface
  extends Action<CategoriesActionTypes> {
  type: CategoriesActionTypes.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface RequestAddCategoryActionInterface
  extends Action<CategoriesActionTypes> {
  type: CategoriesActionTypes.REQUEST_ADD_CATEGORY;
  payload: TypeCategory;
}

export interface AddCategoryActionInterface
  extends Action<CategoriesActionTypes> {
  type: CategoriesActionTypes.ADD_CATEGORY;
  payload: TypeCategory;
}

export interface SetLengthCategories extends Action<CategoriesActionTypes> {
  type: CategoriesActionTypes.SET_LENGTH_CATEGORIES;
  payload: any;
}

export type ActionCategories =
  | SetCategoriesActionInterface
  | FetchCategoriesActionInterface
  | SetLoadingStateActionInterface
  | AddCategoryActionInterface
  | RequestAddCategoryActionInterface
  | RequestClearCategoriesActionInterface
  | ClearCategoriesActionInterface
  | SetCategoriesFilters
  | FetchAllCategoriesActionInterface
  | SetLengthCategories;
