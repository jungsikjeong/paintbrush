import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Button from '../common/Button';

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

const AuthForm = ({ type }) => {
  // 임시
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AuthFormBlock>
      <form onSubmit={onSubmit}>
        <Input placeholder="email@domain.com" />

        {type === 'register' && (
          <Input
            autoComplete="name"
            name="name"
            placeholder="userName"
            // onChange={onChange}
            // value={form.name}
          />
        )}
        <Input
          autoComplete="new-password"
          type="password"
          name="password"
          placeholder="password"
          // onChange={onChange}
          // value={form.password}
        />

        {type === 'register' && (
          <Input
            autoComplete="new-password"
            type="password"
            name="passwordConfirm"
            placeholder="password Check"
            // onChange={onChange}
            // value={form.password}
          />
        )}

        <Footer>
          {type === 'login' ? (
            <StyleButton>Login</StyleButton>
          ) : (
            <StyleButton style={{ background: '#4dabf7' }}>sign up</StyleButton>
          )}
        </Footer>
      </form>
    </AuthFormBlock>
  );
};

export default AuthForm;
