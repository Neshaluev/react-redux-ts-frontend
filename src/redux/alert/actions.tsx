import {
  SetAlertDataActionInterface,
  AlertActionTypes,
  ClearAlertDataActionInterface,
} from './type/ActionTypes';

export const setAlertData = (
  message: string,
  typeAlert: string,
): SetAlertDataActionInterface => ({
  type: AlertActionTypes.SET_ALERT_DATA,
  payload: {
    typeAlert,
    message,
  },
});

export const clearAlert = (payload: string): ClearAlertDataActionInterface => ({
  type: AlertActionTypes.CLEAR_ALERT_DATA,
  payload,
});
