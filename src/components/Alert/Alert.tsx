import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { clearAlert } from '../../redux/alert/actions';
import { selectAlertList } from '../../redux/alert/selectors';
import { TypesMessageAlert } from '../../redux/alert/type/state';

import './Alert.scss';

function Alert() {
  const dispatch = useDispatch();
  const alertList = useSelector(selectAlertList);

  const handleClearAlertMessage = (id: string) => {
    dispatch(clearAlert(id));
  };

  const notify = (message: string, type: TypesMessageAlert, id: string) => {
    toast[type](message, {
      position: toast.POSITION.TOP_RIGHT,
      pauseOnFocusLoss: false,
      toastId: id,
      onOpen: () => handleClearAlertMessage(id),
    });
  };

  useEffect(() => {
    if (alertList !== []) {
      alertList.forEach((alert) =>
        //@ts-ignore
        notify(alert.message, alert.typeAlert, alert.id),
      );
    }
  }, [alertList]);

  return <ToastContainer autoClose={4000} limit={5} />;
}

export default Alert;
