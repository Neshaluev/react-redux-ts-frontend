import { TypeStateRootReducer } from './../rootReducer';
import { createSelector } from 'reselect';
import { LoadingState } from './type/state';

// Categories Items
export const selectProduct = (state: TypeStateRootReducer) => state.product;
export const selectProductItem = createSelector(
  selectProduct,
  (product) => product.item,
);

// Categories Loading
export const selectLoadingState = (state: TypeStateRootReducer): LoadingState =>
  selectProduct(state).loadingState;
export const selectIsProductLoading = (state: TypeStateRootReducer): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;
export const selectIsCategoryLoadead = (state: TypeStateRootReducer): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;
