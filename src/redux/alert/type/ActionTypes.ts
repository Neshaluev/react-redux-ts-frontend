import { TypeAlert } from './../../../../../ts-react-redux/src/redux/alert/type/state';
import { Action } from 'redux';

export enum AlertActionTypes {
  SET_ALERT_DATA = 'alert/SET_ALERT_DATA',
  CLEAR_ALERT_DATA = 'alert/CELAR_ALERT_DATA',
}

export interface SetAlertDataActionInterface extends Action<AlertActionTypes> {
  type: AlertActionTypes.SET_ALERT_DATA;
  payload: TypeAlert;
}
export interface ClearAlertDataActionInterface
  extends Action<AlertActionTypes> {
  type: AlertActionTypes.CLEAR_ALERT_DATA;
  payload: string;
}

export type ActionAlert =
  | SetAlertDataActionInterface
  | ClearAlertDataActionInterface;
