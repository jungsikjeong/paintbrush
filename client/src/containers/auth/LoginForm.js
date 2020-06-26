import React, { useState, useEffect } from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, login, initializeForm } from '../../modules/auth';

const LoginForm = () => {
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;

    dispatch(changeField({ form: 'login', key: name, value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = form;
    dispatch(login({ email, password }));
  };

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('로그인 실패');
      setError('로그인 실패');
      return;
    }

    if (auth) {
      console.log('로그인 성공');
      // dispatch(check());
    }
  }, [auth, authError, dispatch]);

  return (
    <AuthForm
      type="login"
      form={form}
      error={error}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

export default LoginForm;
