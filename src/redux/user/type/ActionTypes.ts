import { UserData } from './state';
import { Action } from 'redux';
import { LoadingState, UserState } from './state';

export enum UsersActionTypes {
  SET_LOADING_STATE = 'user/SET_LOADING_STATE',
  REQUEST_REGISTER_USER = 'user/REQUEST_REGISTER_USER',
  REQUEST_LOGIN_USER = 'user/REQUEST_LOGIN_USER',
  SET_USER = 'user/SET_USER',
  LOGAOUT_USER = 'user/LOGAOUT_USER',
  CLEAR_USER = 'user/LOGAOUT_USER',
}

export interface SetLoadingStateActionInterface
  extends Action<UsersActionTypes> {
  type: UsersActionTypes.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface RequestRegisterUserActionInterface
  extends Action<UsersActionTypes> {
  type: UsersActionTypes.REQUEST_REGISTER_USER;
  payload: UserData;
}
export interface RequestLoginUserActionInterface
  extends Action<UsersActionTypes> {
  type: UsersActionTypes.REQUEST_LOGIN_USER;
  payload: UserData;
}
export interface LogoutUserActionInterface extends Action<UsersActionTypes> {
  type: UsersActionTypes.LOGAOUT_USER;
}
export interface ClearUserActionInterface extends Action<UsersActionTypes> {
  type: UsersActionTypes.CLEAR_USER;
}
export interface SetUserActionInterface extends Action<UsersActionTypes> {
  type: UsersActionTypes.SET_USER;
  payload: UserState['item'];
}
export type ActionUser =
  | SetLoadingStateActionInterface
  | RequestRegisterUserActionInterface
  | RequestLoginUserActionInterface
  | LogoutUserActionInterface
  | ClearUserActionInterface
  | SetUserActionInterface;
