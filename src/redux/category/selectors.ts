import { TypeStateRootReducer } from './../rootReducer';
import { createSelector } from 'reselect';
import { LoadingState } from './type/state';

// Categories Items
export const selectCategory = (state: TypeStateRootReducer) => state.category;
export const selectCategoryItem = createSelector(
  selectCategory,
  (category) => category.item,
);
export const selectCategoryListProduct = createSelector(
  selectCategory,
  (category) => category.listProduct,
);
// Categories Loading
export const selectLoadingState = (state: TypeStateRootReducer): LoadingState =>
  selectCategory(state).loadingState;
export const selectIsCategoryLoading = (state: TypeStateRootReducer): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;
export const selectIsCategoryLoadead = (state: TypeStateRootReducer): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;
