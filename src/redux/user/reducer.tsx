import produce, { Draft } from 'immer';
import { ActionUser, UsersActionTypes } from './type/ActionTypes';
import { LoadingState, UserState } from './type/state';

const initialStateUser: UserState = {
  item: null,
  loadingState: LoadingState.NEVER,
  isAuth: false,
  errors: null,
};

export const userReducer = produce(
  (draft: Draft<UserState>, action: ActionUser) => {
    switch (action.type) {
      case UsersActionTypes.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;
      case UsersActionTypes.CLEAR_USER:
      case UsersActionTypes.LOGAOUT_USER:
        draft.item = null;
        draft.loadingState = LoadingState.NEVER;
        draft.isAuth = false;
        draft.errors = null;
        window.localStorage.clear();
        break;
      case UsersActionTypes.REQUEST_LOGIN_USER:
      case UsersActionTypes.REQUEST_REGISTER_USER:
        draft.item = null;
        draft.isAuth = false;
        draft.loadingState = LoadingState.LOADING;
        break;
      case UsersActionTypes.SET_USER:
        draft.item = action.payload;
        draft.isAuth = true;
        draft.loadingState = LoadingState.LOADED;
        break;
      default:
        return draft;
    }
  },
  initialStateUser,
);
