import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';

const RegisterPage = () => {
  return (
    <AuthTemplate type="register">
      <AuthForm type="register" />
    </AuthTemplate>
  );
};

export default RegisterPage;
