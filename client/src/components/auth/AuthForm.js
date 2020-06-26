import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Button from '../common/Button';

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const AuthFormBlock = styled.div``;

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  border: 0;
  border-radius: 5px;
  outline: 0;
  padding: 10px 15px;
  margin-top: 15px;
`;

const Footer = styled.div`
  margin-top: 1rem;
`;
const SLink = styled(Link)``;

const StyleButton = styled(Button)`
  width: 100%;
`;

const AuthForm = ({ type, onChange, onSubmit, form, error }) => {
  return (
    <AuthFormBlock>
      <form onSubmit={onSubmit}>
        <Input
          autoComplete="email"
          placeholder="email@domain.com"
          name="email"
          onChange={onChange}
          value={form.email}
        />

        {type === 'register' && (
          <Input
            autoComplete="name"
            name="name"
            placeholder="userName"
            onChange={onChange}
            value={form.name}
          />
        )}
        <Input
          autoComplete="new-password"
          type="password"
          name="password"
          placeholder="password"
          onChange={onChange}
          value={form.password}
        />

        {type === 'register' && (
          <Input
            autoComplete="new-password"
            type="password"
            name="passwordConfirm"
            placeholder="passwordCheck"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Footer>
          {type === 'login' ? (
            <StyleButton>Login</StyleButton>
          ) : (
            <StyleButton style={{ background: '#4dabf7' }} auth>
              sign up
            </StyleButton>
          )}
        </Footer>
      </form>
    </AuthFormBlock>
  );
};

export default AuthForm;
