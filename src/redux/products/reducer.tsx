import produce, { Draft } from 'immer';
import { ActionProducts, ProductsActionTypes } from './type/ActionTypes';
import { LoadingState, ProductsState } from './type/state';

const baseFilter = {
  search: '',
  page: 1,
  limit: 15,
  sort: 'name',
  order: 'asc',
};

const initialStateProducts: ProductsState = {
  items: [],
  loadingState: LoadingState.NEVER,
  filters: baseFilter,
  lengthProducts: {
    totalLenProduct: null,
    currentLenProduct: null,
  },
};

export const productsReducer = produce(
  (draft: Draft<ProductsState>, action: ActionProducts) => {
    switch (action.type) {
      case ProductsActionTypes.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;
      case ProductsActionTypes.CLEAR_PRODUCTS:
        draft.items = [];
        draft.filters = baseFilter;
        draft.loadingState = LoadingState.NEVER;
        draft.lengthProducts = {
          totalLenProduct: null,
          currentLenProduct: null,
        };
        break;
      case ProductsActionTypes.REQUEST_GET_PRODUCTS:
        draft.items = [];
        draft.loadingState = LoadingState.LOADING;
        break;
      case ProductsActionTypes.SET_PRODUCTS:
        draft.items = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;
      case ProductsActionTypes.SET_PRODUCT_FILTER:
        // @ts-ignore
        draft.filters[action.payload.name] = action.payload.value;
        break;
      case ProductsActionTypes.SET_LENGTH_PRODUCTS:
        draft.lengthProducts = {
          totalLenProduct: action.payload.total,
          currentLenProduct: action.payload.current,
        };
        break;
      default:
        return draft;
    }
  },
  initialStateProducts,
);
