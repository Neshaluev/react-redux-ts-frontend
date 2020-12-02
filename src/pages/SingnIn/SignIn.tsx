import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { requestLoginUser } from '../../redux/user/actions';

import './signin.scss';

export type LoginFormProps = {
  email: string;
  password: string;
};

const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Invalid email .').required('Input email.'),
  password: yup
    .string()
    .min(6, 'Min password length is 6 characters.')
    .required('Input password.'),
});

function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm<LoginFormProps>({
    defaultValues: {
      email: 'admin@admin.com',
      password: '123456',
    },
    // @ts-ignore
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (data: LoginFormProps) => {
    const payload = {
      history,
      data,
    };
    dispatch(requestLoginUser(payload));
  };

  const goPageRegsiter = () => {
    history.push('/register');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="wrapper-form">
      <h2>Авторизация</h2>
      <div className="form-login">
        <Input
          label="Login"
          type="text"
          name="email"
          autoComplete="off"
          required
          inputRef={register({ required: true })}
          error={errors.email}
        />
      </div>
      <div className="form-login">
        <Input
          label="Password"
          type="password"
          name="password"
          autoComplete="off"
          required
          inputRef={register}
          error={errors.password}
        />
      </div>
      <div className="form-controller">
        <Button className="accent" type="submit">
          Login
        </Button>
        <Button onClick={goPageRegsiter}>Register</Button>
      </div>
    </form>
  );
}

export default SignIn;
