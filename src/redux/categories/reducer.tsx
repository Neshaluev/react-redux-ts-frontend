import produce, { Draft } from 'immer';
import { ActionCategories, CategoriesActionTypes } from './type/ActionTypes';
import { CategoriesState, LoadingState } from './type/state';

const baseFilter = {
  search: '',
  page: 1,
  limit: 15,
  sort: 'name',
  order: 'asc',
};

const initialStateCategories: CategoriesState = {
  items: [],
  lengthCategories: {
    totalLenCategory: null,
    currentLenCategory: null,
  },
  loadingState: LoadingState.NEVER,
  filters: baseFilter,
};

export { baseFilter };

export const categoriesReducer = produce(
  (draft: Draft<CategoriesState>, action: ActionCategories) => {
    switch (action.type) {
      case CategoriesActionTypes.SET_CATEGORIES_DATA:
        draft.items = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;
      case CategoriesActionTypes.CLEAR_CATEGORIES:
        draft.items = [];
        draft.loadingState = LoadingState.LOADING;
        draft.filters = baseFilter;
        draft.lengthCategories = {
          totalLenCategory: null,
          currentLenCategory: null,
        };
        break;
      case CategoriesActionTypes.FETCH_ALL_CATEGORIES:
      case CategoriesActionTypes.FETCH_CATEGORIES:
        draft.items = [];
        draft.loadingState = LoadingState.LOADING;
        break;
      case CategoriesActionTypes.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;
      case CategoriesActionTypes.ADD_CATEGORY:
        draft.items.splice(0, 0, action.payload);
        break;
      case CategoriesActionTypes.SET_CATEGORIES_FILTER:
        draft.filters[action.payload.name] = action.payload.value;
        break;
      case CategoriesActionTypes.SET_LENGTH_CATEGORIES:
        draft.lengthCategories = {
          totalLenCategory: action.payload.total,
          currentLenCategory: action.payload.current,
        };
        break;
      default:
        return draft;
    }
  },
  initialStateCategories,
);
