import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { requestRegistrationUser } from '../../redux/user/actions';

import './Register.scss';

export type LoginFormProps = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
};

const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Invalid email .').required('Input email.'),
  password: yup
    .string()
    .min(6, 'Min password length is 6 characters.')
    .required('Input password.'),
  firstname: yup.string().required('Enter your name'),
  lastname: yup.string().required('Enter your lastname'),
});

function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm<LoginFormProps>({
    defaultValues: {
      email: 'test@test.com',
      password: '123456',
      firstname: 'test name',
      lastname: 'last name',
    },
    //@ts-ignore
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (data: LoginFormProps) => {
    const payload = {
      history,
      data,
    };
    dispatch(requestRegistrationUser(payload));
  };

  const goPageLogin = () => {
    history.push('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="wrapper-form">
      <h2>Авторизация</h2>
      <div className="form-register">
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
      <div className="form-login">
        <Input
          label="First Name"
          type="name"
          name="firstname"
          autoComplete="off"
          required
          inputRef={register}
          error={errors.firstname}
        />
      </div>
      <div className="form-login">
        <Input
          label="Last Name"
          type="name"
          name="lastname"
          autoComplete="off"
          required
          inputRef={register}
          error={errors.lastname}
        />
      </div>
      <div className="form-controller">
        <Button className="accent" type="submit">
          Register
        </Button>
        <Button onClick={goPageLogin}>Login</Button>
      </div>
    </form>
  );
}

export default Register;
