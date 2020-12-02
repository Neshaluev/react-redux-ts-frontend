import produce, { Draft } from 'immer';
import { ActionCategory, CategoryActionTypes } from './type/ActionTypes';
import { CategoryState, LoadingState } from './type/state';

const initialStateCategory: CategoryState = {
  item: null,
  listProduct: [],
  loadingState: LoadingState.NEVER,
};

export const categoryReducer = produce(
  (draft: Draft<CategoryState>, action: ActionCategory) => {
    switch (action.type) {
      case CategoryActionTypes.CLEAR_CATEGORY:
      case CategoryActionTypes.REQUEST_FIND_BY_ID_CATEGORY:
        draft.item = null;
        draft.listProduct = [];
        draft.loadingState = LoadingState.LOADING;
        break;
      case CategoryActionTypes.SET_CATEGORY:
        draft.item = action.payload;
        break;
      case CategoryActionTypes.SET_PRODUCTS_FOR_CATEGORY:
        draft.listProduct = action.payload;
        break;
      case CategoryActionTypes.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;
      case CategoryActionTypes.PUT_CATEGORY:
        draft.item = action.payload;
        break;
      default:
        return draft;
    }
  },
  initialStateCategory,
);
