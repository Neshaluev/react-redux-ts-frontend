import { TypeStateRootReducer } from './../rootReducer';
import { createSelector } from 'reselect';
import { LoadingState } from './type/state';

export const selectUser = (state: TypeStateRootReducer) => state.user;
export const selectUserItem = createSelector(
  selectUser,
  (products) => products.item,
);

export const selectLoadingState = (state: TypeStateRootReducer): LoadingState =>
  selectUser(state).loadingState;
export const selectIsUserLoading = (state: TypeStateRootReducer): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;
export const selectIsUserLoadead = (state: TypeStateRootReducer): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectIsAuthState = (state: TypeStateRootReducer): boolean =>
  selectUser(state).isAuth === true;
