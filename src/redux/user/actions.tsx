import {
  ClearUserActionInterface,
  LogoutUserActionInterface,
  RequestLoginUserActionInterface,
  RequestRegisterUserActionInterface,
  SetLoadingStateActionInterface,
  SetUserActionInterface,
  UsersActionTypes,
} from './type/ActionTypes';
import { LoadingState, UserData, UserState } from './type/state';


export const setUserLoadingState = (
  payload: LoadingState,
): SetLoadingStateActionInterface => ({
  type: UsersActionTypes.SET_LOADING_STATE,
  payload,
});


export const requestRegistrationUser = (
  payload: UserData,
): RequestRegisterUserActionInterface => ({
  type: UsersActionTypes.REQUEST_REGISTER_USER,
  payload,
});

export const requestLoginUser = (
  payload: UserData,
): RequestLoginUserActionInterface => ({
  type: UsersActionTypes.REQUEST_LOGIN_USER,
  payload,
});

export const setUser = (
  payload: UserState['item'],
): SetUserActionInterface => ({
  type: UsersActionTypes.SET_USER,
  payload,
});

export const logautUser = (): LogoutUserActionInterface => ({
  type: UsersActionTypes.LOGAOUT_USER,
});

export const clearUser = (): ClearUserActionInterface => ({
  type: UsersActionTypes.CLEAR_USER,
});
