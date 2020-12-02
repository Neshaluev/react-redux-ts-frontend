import { createSelector } from 'reselect';
import { TypeStateRootReducer } from './../rootReducer';

export const selectAlert = (state: TypeStateRootReducer) => state.alert;
export const selectAlertList = createSelector(
  selectAlert,
  (alert) => alert.listAlert,
);
