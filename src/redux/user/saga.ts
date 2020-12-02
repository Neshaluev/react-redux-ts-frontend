import { setUser, setUserLoadingState } from './actions';
import { takeLatest, put, call } from 'redux-saga/effects';
import { AuthApi } from '../../api/auth-api';
import {
  UsersActionTypes,
  RequestRegisterUserActionInterface,
  RequestLoginUserActionInterface,
} from './type/ActionTypes';
import { LoadingState } from './type/state';
import { setAlertData } from '../alert/actions';
import { TypesMessageAlert } from '../alert/type/state';

export function* watchLoginUser() {
  yield takeLatest(UsersActionTypes.REQUEST_LOGIN_USER, requestLoginUser);
}
export function* watchRegisterUser() {
  yield takeLatest(UsersActionTypes.REQUEST_REGISTER_USER, requestRegisterUser);
}

function* requestLoginUser({ payload }: RequestLoginUserActionInterface) {
  try {
    const { data, token } = yield call(AuthApi.loginUser, payload.data);
    window.localStorage.setItem('token', token);
    yield put(setUser(data));
    yield put(setUserLoadingState(LoadingState.LOADED));
    yield put(setAlertData('Успешная авторизация.', TypesMessageAlert.SUCCESS));
    yield payload.history.push('/home');
  } catch (error) {
    yield put(setUserLoadingState(LoadingState.ERROR));
    yield put(setAlertData('Не удалось авторизация.', TypesMessageAlert.ERROR));
  }
}
function* requestRegisterUser({ payload }: RequestRegisterUserActionInterface) {
  try {
    const data = yield call(AuthApi.registerUser, payload.data);
    yield put(setUser(data));
    yield put(setUserLoadingState(LoadingState.LOADED));
    yield put(
      setAlertData('Вы успешно зарегистрировались.', TypesMessageAlert.SUCCESS),
    );
    yield payload.history.push('/home');
  } catch (error) {
    console.log(error);
    yield put(setUserLoadingState(LoadingState.ERROR));
    yield put(setAlertData('Ошибка регистрации.', TypesMessageAlert.ERROR));
  }
}

export const userAllSagas = [watchLoginUser(), watchRegisterUser()];
