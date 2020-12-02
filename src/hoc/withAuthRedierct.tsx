import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAlertData } from '../redux/alert/actions';
import { TypesMessageAlert } from '../redux/alert/type/state';
import { selectIsAuthState } from '../redux/user/selectors';

/* eslint-disable */

export default (SpecialComponent: any) => {
  return (props: any) => {
    const isLoggedIn = useSelector(selectIsAuthState);
    const dispatch = useDispatch();

    const handleRedirectMessage = () => {
      dispatch(
        setAlertData('Пожалуйста авторизируйтесь.', TypesMessageAlert.ERROR),
      );
    };

    const redirectGoLogin = () => {
      props.history.push('/');
    };

    useEffect(() => {
      if (isLoggedIn === false) {
        handleRedirectMessage();
        redirectGoLogin();
      }
    }, [isLoggedIn]);

    return <SpecialComponent />;
  };
};
