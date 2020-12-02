import produce, { Draft } from 'immer';
import { uid } from 'uid';
import { ActionAlert, AlertActionTypes } from './type/ActionTypes';
import { AlertState, TypeAlert } from './type/state';

const initialStateAlert: AlertState = {
  listAlert: [],
};

export const alertReducer = produce(
  (draft: Draft<AlertState>, action: ActionAlert) => {
    switch (action.type) {
      case AlertActionTypes.SET_ALERT_DATA:
        const { message, typeAlert } = action.payload;
        const alert: TypeAlert = {
          id: uid(16),
          message,
          typeAlert,
        };
        draft.listAlert.push(alert);
        break;
      case AlertActionTypes.CLEAR_ALERT_DATA:
        const index = draft.listAlert.findIndex(
          (item) => item.id === action.payload,
        );
        if (index !== -1) draft.listAlert.splice(index, 1);
        break;
      default:
        return draft;
    }
  },
  initialStateAlert,
);
