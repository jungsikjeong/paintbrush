import React from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = () => {};

  return <AuthForm type="login" />;
};

export default LoginForm;
