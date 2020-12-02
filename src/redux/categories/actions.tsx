import {
  AddCategoryActionInterface,
  CategoriesActionTypes,
  FetchAllCategoriesActionInterface,
  FetchCategoriesActionInterface,
  RequestAddCategoryActionInterface,
  SetCategoriesActionInterface,
  SetCategoriesFilters,
  SetLengthCategories,
  SetLoadingStateActionInterface,
} from './type/ActionTypes';
import { CategoriesState, LoadingState, TypeCategory } from './type/state';

export const setCategories = (
  payload: CategoriesState['items'],
): SetCategoriesActionInterface => ({
  type: CategoriesActionTypes.SET_CATEGORIES_DATA,
  payload,
});

export const fetchAllCategories = (): FetchAllCategoriesActionInterface => ({
  type: CategoriesActionTypes.FETCH_ALL_CATEGORIES,
});

export const fetchCategories = (
  payload: any,
): FetchCategoriesActionInterface => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES,
  payload,
});

export const requestAddCategory = (
  payload: TypeCategory,
): RequestAddCategoryActionInterface => ({
  type: CategoriesActionTypes.REQUEST_ADD_CATEGORY,
  payload,
});
export const addCategory = (
  payload: TypeCategory,
): AddCategoryActionInterface => ({
  type: CategoriesActionTypes.ADD_CATEGORY,
  payload,
});

export const clearCategories = () => ({
  type: CategoriesActionTypes.CLEAR_CATEGORIES,
});

export const setCategoriesLoadingState = (
  payload: LoadingState,
): SetLoadingStateActionInterface => ({
  type: CategoriesActionTypes.SET_LOADING_STATE,
  payload,
});

export const setCategoriesFilters = (payload: any): SetCategoriesFilters => ({
  type: CategoriesActionTypes.SET_CATEGORIES_FILTER,
  payload,
});

export const setLengthCategories = (payload: any): SetLengthCategories => ({
  type: CategoriesActionTypes.SET_LENGTH_CATEGORIES,
  payload,
});
