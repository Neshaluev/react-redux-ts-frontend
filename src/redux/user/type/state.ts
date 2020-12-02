import { History } from '@types/history';

export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export type UserData = {
  history: History;
  data: TypeDataLogin | TypeDataRegister;
};

export type TypeDataLogin = {
  email: string;
  password: string;
};
export type TypeDataRegister = {
  email: string;
  password?: string;
  firstname: string;
  lastname: string;
};

export type UserState = {
  item: TypeDataRegister | null;
  loadingState: LoadingState;
  isAuth: boolean;
  errors: any;
};
