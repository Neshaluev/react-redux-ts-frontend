import { createSelector } from 'reselect';

import { TypeStateRootReducer } from './../rootReducer';
import { LoadingState } from './type/state';

export const selectCategories = (state: TypeStateRootReducer) =>
  state.categories;
export const selectCategoriesItems = createSelector(
  selectCategories,
  (categories) => categories.items,
);
export const selectCategoriesLength = createSelector(
  selectCategories,
  (categories) => categories.lengthCategories,
);
// @ts-ignore
export const selectCategoriesById = createSelector(
  (state: any) => state,
  (_: any, id: any) => id,
  (state: any, id: any) =>
    state.categories.items.filter((item: any) => item._id === id),
);

export const selectLoadingState = (state: TypeStateRootReducer): LoadingState =>
  selectCategories(state).loadingState;
export const selectIsCategoriesLoading = (
  state: TypeStateRootReducer,
): boolean => selectLoadingState(state) === LoadingState.LOADING;
export const selectIsCategoriesLoadead = (
  state: TypeStateRootReducer,
): boolean => selectLoadingState(state) === LoadingState.LOADED;

export const selectCategoriesFilters = createSelector(
  selectCategories,
  (categories) => categories.filters,
);
