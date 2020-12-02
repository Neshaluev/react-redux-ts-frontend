import produce, { Draft } from 'immer';
import { ActionProduct, ProductActionTypes } from './type/ActionTypes';
import { ProductState, LoadingState } from './type/state';

const initialStateCategory: ProductState = {
  item: null,
  loadingState: LoadingState.NEVER,
};

export const productReducer = produce(
  (draft: Draft<ProductState>, action: ActionProduct) => {
    switch (action.type) {
      case ProductActionTypes.REQUEST_CREATE_PRODUCT:
      case ProductActionTypes.REQUEST_PUT_PRODUCT:
      case ProductActionTypes.CLEAR_PRODUCT:
      case ProductActionTypes.REQUEST_DELETE_PRODUCT:
        draft.item = null;
        draft.loadingState = LoadingState.LOADING;
        break;
      case ProductActionTypes.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;
      case ProductActionTypes.SET_PRODUCT:
        draft.item = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;
      default:
        return draft;
    }
  },
  initialStateCategory,
);
