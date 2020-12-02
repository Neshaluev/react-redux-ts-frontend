import { TypeStateRootReducer } from './../rootReducer';
import { createSelector } from 'reselect';
import { LoadingState } from './type/state';

export const selectProducts = (state: TypeStateRootReducer) => state.products;
export const selectProductsItems = createSelector(
  selectProducts,
  (products) => products.items,
);
export const selectProductsFilters = createSelector(
  selectProducts,
  (products) => products.filters,
);
export const selectProductsLength = createSelector(
  selectProducts,
  (products) => products.lengthProducts,
);

export const selectLoadingState = (state: TypeStateRootReducer): LoadingState =>
  selectProducts(state).loadingState;
export const selectIsProductsLoading = (state: TypeStateRootReducer): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;
export const selectIsProductsLoadead = (state: TypeStateRootReducer): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;
